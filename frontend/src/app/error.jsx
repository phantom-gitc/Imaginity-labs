'use client'

import { useEffect } from 'react'
import { Button } from '../components/ui/Button'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="wrap flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-28 text-center">
      <h1 className="display text-4xl">Something went wrong.</h1>
      <p className="lede max-w-[42ch]">An unexpected error occurred while loading this page. You can try again.</p>
      <Button onClick={reset}>Try again</Button>
    </section>
  )
}
