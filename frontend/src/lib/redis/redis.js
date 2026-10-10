import Redis from 'ioredis'

/**
 * Global singleton for Redis client across serverless invocations and hot-reloads.
 */
let cachedRedis = null

export function getRedisClient() {
  const url = process.env.REDIS_URL
  if (!url) {
    return null
  }

  if (cachedRedis) {
    return cachedRedis
  }

  try {
    const client = new Redis(url, {
      connectTimeout: 5000,
      maxRetriesPerRequest: 2,
      retryStrategy(times) {
        if (times > 5) {
          return null // Stop retrying after 5 attempts
        }
        return Math.min(times * 100, 2000)
      },
      enableOfflineQueue: true,
      lazyConnect: false,
    })

    client.on('error', (err) => {
      // Log as warning to prevent crashing the serverless worker
      console.warn('[Redis] Client warning:', err.message)
    })

    client.on('connect', () => {
      console.log('[Redis] Connected to Redis cloud successfully.')
    })

    cachedRedis = client
    return client
  } catch (err) {
    console.error('[Redis] Initialization error:', err.message)
    return null
  }
}

/**
 * Retrieve cached JSON or string value.
 */
export async function getCache(key) {
  const client = getRedisClient()
  if (!client) return null

  try {
    const raw = await client.get(key)
    if (!raw) return null
    try {
      return JSON.parse(raw)
    } catch {
      return raw
    }
  } catch (err) {
    console.warn('[Redis] getCache error for key:', key, err.message)
    return null
  }
}

/**
 * Cache an item with optional TTL in seconds.
 */
export async function setCache(key, value, ttlSeconds = 300) {
  const client = getRedisClient()
  if (!client) return false

  try {
    const payload = typeof value === 'object' ? JSON.stringify(value) : String(value)
    if (ttlSeconds && ttlSeconds > 0) {
      await client.set(key, payload, 'EX', ttlSeconds)
    } else {
      await client.set(key, payload)
    }
    return true
  } catch (err) {
    console.warn('[Redis] setCache error for key:', key, err.message)
    return false
  }
}

/**
 * Delete a cached key.
 */
export async function delCache(key) {
  const client = getRedisClient()
  if (!client) return false

  try {
    await client.del(key)
    return true
  } catch (err) {
    console.warn('[Redis] delCache error for key:', key, err.message)
    return false
  }
}

/**
 * Atomic sliding-counter increment for distributed rate limiting.
 * @param {string} key
 * @param {number} windowSeconds
 * @returns {Promise<{ count: number, ttl: number } | null>}
 */
export async function incrementCounter(key, windowSeconds = 60) {
  const client = getRedisClient()
  if (!client) return null

  try {
    const multi = client.multi()
    multi.incr(key)
    multi.ttl(key)
    const results = await multi.exec()

    if (!results || !results[0] || !results[1]) return null

    const [errIncr, count] = results[0]
    const [errTtl, ttl] = results[1]

    if (errIncr) return null

    // If key just created (ttl is -1), set the expiration window
    if (ttl === -1) {
      await client.expire(key, windowSeconds)
    }

    return {
      count: Number(count) || 1,
      ttl: ttl > 0 ? ttl : windowSeconds,
    }
  } catch (err) {
    console.warn('[Redis] incrementCounter error for key:', key, err.message)
    return null
  }
}

/**
 * Verify Redis health and measure round-trip latency.
 */
export async function checkRedisHealth() {
  const client = getRedisClient()
  if (!client) {
    return { available: false, reason: 'REDIS_URL not configured' }
  }

  const start = Date.now()
  try {
    const reply = await client.ping()
    const latencyMs = Date.now() - start
    return {
      available: reply === 'PONG',
      status: 'connected',
      latencyMs,
    }
  } catch (err) {
    return {
      available: false,
      status: 'disconnected',
      error: err.message,
    }
  }
}
