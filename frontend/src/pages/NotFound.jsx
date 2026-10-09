import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <Section bg="light" className="min-h-[70vh] flex items-center justify-center pt-32 pb-20">
      <div className="text-center max-w-xl mx-auto flex flex-col items-center">
        <Eyebrow dot="#FFD93D">Error 404</Eyebrow>
        <H as="h1" size="xl" className="mt-4 mb-4">
          Page not <It>found.</It>
        </H>
        <p className="lede text-center mb-8">
          The requested coordinate does not exist or has been refactored.
        </p>
        <Button to="/">Return to Home</Button>
      </div>
    </Section>
  )
}

