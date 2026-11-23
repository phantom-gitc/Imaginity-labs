import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import dns from 'node:dns'
try {
  dns.setServers(['8.8.8.8', '1.1.1.1'])
} catch {}

import { securityHeaders } from './src/lib/security/headers.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    agentUpgrade: 'security',
  },
  images: {
    qualities: [75, 95],
  },
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
