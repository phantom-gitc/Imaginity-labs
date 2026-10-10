import crypto from 'node:crypto'
import dns from 'node:dns'

// Ensure Atlas SRV resolution works reliably across all local ISP / OS environments
try {
  dns.setServers(['8.8.8.8', '1.1.1.1'])
} catch {}

/**
 * MongoDB Data-Access Layer.
 * Connects securely to MongoDB using the MONGODB_URI environment variable.
 * Gracefully operates in development or zero-credential environments.
 */

let cachedClient = null
let cachedDb = null

/**
 * One-way hash for client IP to respect user privacy while allowing abuse pattern analysis.
 */
function hashIp(ip) {
  if (!ip) return 'anonymous'
  return crypto.createHash('sha256').update(ip + (process.env.IP_SALT || 'imaginity_default_salt')).digest('hex').slice(0, 16)
}

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI
  const dbName = process.env.MONGODB_DB_NAME || 'imaginity-labs'

  if (!uri) {
    return { client: null, db: null, available: false }
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb, available: true }
  }

  try {
    const { MongoClient } = await import('mongodb')
    const client = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })

    await client.connect()
    const db = client.db(dbName)

    cachedClient = client
    cachedDb = db

    return { client, db, available: true }
  } catch (err) {
    // If MongoDB failed to connect (e.g. SRV DNS failure), apply public DNS and retry
    try {
      const dns = await import('dns')
      dns.setServers(['8.8.8.8', '1.1.1.1'])

      const { MongoClient } = await import('mongodb')
      const retryClient = new MongoClient(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      })

      await retryClient.connect()
      const db = retryClient.db(dbName)

      cachedClient = retryClient
      cachedDb = db

      return { client: retryClient, db, available: true }
    } catch (retryErr) {
      console.error('[Database] Failed to connect to MongoDB:', retryErr.message)
      return { client: null, db: null, available: false }
    }
  }
}

/**
 * Persist contact form enquiry or project brief.
 */
export async function saveEnquiry(record) {
  const { db, available } = await connectToDatabase()
  if (!available) {
    // If MongoDB is not yet configured in .env, gracefully acknowledge without failing
    return { persisted: false, reason: 'MONGODB_URI not configured in .env' }
  }

  try {
    const collection = db.collection('enquiries')
    const doc = {
      name: record.name,
      email: record.email,
      service: record.service || 'General Enquiry',
      scope: record.scope || 'Not specified',
      message: record.message,
      ipHash: hashIp(record.ip),
      userAgent: record.userAgent ? record.userAgent.slice(0, 200) : 'unknown',
      status: 'new',
      createdAt: new Date(),
    }

    const result = await collection.insertOne(doc)
    return { persisted: true, id: result.insertedId.toString() }
  } catch (err) {
    console.error('[Database] Error saving enquiry:', err.message)
    return { persisted: false, error: err.message }
  }
}

/**
 * Persist newsletter subscriber.
 */
export async function saveSubscriber(record) {
  const { db, available } = await connectToDatabase()
  if (!available) {
    return { persisted: false, reason: 'MONGODB_URI not configured in .env' }
  }

  try {
    const collection = db.collection('subscribers')
    // Upsert to handle duplicates cleanly without throwing errors
    const filter = { email: record.email }
    const update = {
      $set: {
        email: record.email,
        ipHash: hashIp(record.ip),
        status: 'subscribed',
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    }

    const result = await collection.updateOne(filter, update, { upsert: true })
    return { persisted: true, matchedCount: result.matchedCount, upsertedId: result.upsertedId }
  } catch (err) {
    console.error('[Database] Error saving subscriber:', err.message)
    return { persisted: false, error: err.message }
  }
}
