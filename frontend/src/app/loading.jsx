/** Matches the previous Suspense fallback: reserves the viewport while a route segment loads. */
export default function Loading() {
  return <div className="min-h-screen" aria-busy="true" />
}
