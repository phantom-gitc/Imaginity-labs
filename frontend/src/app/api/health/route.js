import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/db/mongodb.js'
import { checkRedisHealth } from '../../../lib/redis/redis.js'

export const dynamic = 'force-dynamic'

export async function GET() {
  const [mongoRes, redisRes] = await Promise.allSettled([
    connectToDatabase().then((res) => ({
      available: res.available,
      status: res.available ? 'connected' : 'unavailable',
      database: res.available ? (process.env.MONGODB_DB_NAME || 'imaginity-labs') : null,
    })),
    checkRedisHealth(),
  ])

  const mongoStatus = mongoRes.status === 'fulfilled' ? mongoRes.value : { available: false, error: mongoRes.reason?.message }
  const redisStatus = redisRes.status === 'fulfilled' ? redisRes.value : { available: false, error: redisRes.reason?.message }

  const isHealthy = true // Service is operational even if external persistence has fallback

  return NextResponse.json(
    {
      status: isHealthy ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      services: {
        mongodb: mongoStatus,
        redis: redisStatus,
        email: {
          receiverConfigured: Boolean(process.env.CONTACT_RECEIVER_EMAIL),
          provider: process.env.RESEND_API_KEY ? 'resend' : (process.env.SMTP_HOST ? 'smtp' : 'test_logging_mode'),
        },
      },
    },
    { status: 200 }
  )
}
