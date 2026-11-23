import { MongoClient } from 'mongodb'
import Redis from 'ioredis'

import dns from 'node:dns'
try {
  dns.setServers(['8.8.8.8', '1.1.1.1'])
} catch {}

const mongoUri = 'mongodb+srv://sarojkumarpadhi01_db_user:P1clXTJYng1V6IPL@backend-live.zezimrz.mongodb.net/surenext'
const redisUrl = 'redis://default:73TmD4T55m8VelsGUq5Uv297TSTIYYt6@nest-mask-party-48782.db.redis.io:15465'

console.log('Testing live credentials from frontend...')

async function testMongo() {
  try {
    const client = new MongoClient(mongoUri, { serverSelectionTimeoutMS: 5000 })
    await client.connect()
    console.log('✔ MongoDB connected successfully!')
    const db = client.db('surenext')
    const collections = await db.listCollections().toArray()
    console.log('  Collections in surenext:', collections.map(c => c.name))
    await client.close()
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message)
  }
}

async function testRedis() {
  try {
    const redis = new Redis(redisUrl, {
      connectTimeout: 5000,
      maxRetriesPerRequest: 1,
      lazyConnect: true
    })
    await redis.connect()
    console.log('✔ Redis connected successfully!')
    await redis.set('surenext:test', 'hello_redis', 'EX', 10)
    const val = await redis.get('surenext:test')
    console.log('  Redis test key value:', val)
    await redis.quit()
  } catch (err) {
    console.error('❌ Redis connection error:', err.message)
  }
}

async function run() {
  await testMongo()
  await testRedis()
}

run()
