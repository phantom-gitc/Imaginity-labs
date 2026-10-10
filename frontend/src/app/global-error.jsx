'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log privately to console without exposing internal details to visitor UI
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0a0a12', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: 600 }}>Something went wrong.</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '420px', lineHeight: 1.6, marginBottom: '24px' }}>
            An unexpected error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 28px',
              borderRadius: '999px',
              background: '#3b5bff',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            Reload Page
          </button>
        </main>
      </body>
    </html>
  )
}
