import { incrementCounter } from '../redis/redis.js'

/**
 * Sliding-window distributed rate limiter backed by Redis with in-memory fallback.
 * Prevents endpoint exhaustion, brute-force spam, and automated scraping across multiple server instances.
 */

const tracker = new Map()

// Clean up expired buckets every 5 minutes to prevent memory leaks in fallback map
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, record] of tracker.entries()) {
      if (now > record.resetTime) {
        tracker.delete(key)
      }
    }
  }, 5 * 60 * 1000).unref?.()
}

/**
 * Extracts the real client IP address safely from standard proxy headers.
 */
export function getClientIp(req) {
  // Check Cloudflare
  const cfIp = req.headers.get('cf-connecting-ip')
  if (cfIp) return cfIp.trim()

  // Check standard x-real-ip
  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp.trim()

  // Check x-forwarded-for (first entry is the client)
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (forwardedFor) {
    const ips = forwardedFor.split(',')
    if (ips[0]) return ips[0].trim()
  }

  return '127.0.0.1'
}

/**
 * Evaluates rate limit for a given key (IP + route identifier).
 * Checks distributed Redis first, falling back to local memory if Redis is unavailable.
 * @param {string} key - Unique key combining namespace and client identifier
 * @param {number} max - Maximum allowed requests in window
 * @param {number} windowMs - Window duration in milliseconds
 * @returns {Promise<{ success: boolean, limit: number, remaining: number, reset: number, retryAfter: number }>}
 */
export async function checkRateLimit(key, max = 5, windowMs = 600000) {
  // 1. Try Distributed Redis Atomic Counter
  try {
    const windowSeconds = Math.max(1, Math.ceil(windowMs / 1000))
    const redisResult = await incrementCounter(`ratelimit:${key}`, windowSeconds)
    if (redisResult) {
      const { count, ttl } = redisResult
      if (count > max) {
        return {
          success: false,
          limit: max,
          remaining: 0,
          reset: ttl,
          retryAfter: ttl,
        }
      }
      return {
        success: true,
        limit: max,
        remaining: Math.max(0, max - count),
        reset: ttl,
        retryAfter: 0,
      }
    }
  } catch (err) {
    console.warn('[RateLimit] Redis check failed, using fallback:', err.message)
  }

  // 2. In-Memory Fallback
  const now = Date.now()
  let record = tracker.get(key)

  if (!record || now > record.resetTime) {
    record = {
      count: 1,
      resetTime: now + windowMs,
    }
    tracker.set(key, record)
    return {
      success: true,
      limit: max,
      remaining: max - 1,
      reset: Math.ceil((record.resetTime - now) / 1000),
      retryAfter: 0,
    }
  }

  record.count += 1

  if (record.count > max) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000)
    return {
      success: false,
      limit: max,
      remaining: 0,
      reset: retryAfter,
      retryAfter,
    }
  }

  return {
    success: true,
    limit: max,
    remaining: max - record.count,
    reset: Math.ceil((record.resetTime - now) / 1000),
    retryAfter: 0,
  }
}
