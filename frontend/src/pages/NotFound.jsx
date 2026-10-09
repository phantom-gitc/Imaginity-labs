import { useRef } from 'react'
import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { Button } from '../components/ui/Button'
import { Obj } from '../components/ui/Img'
import { A } from '../data/site'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { useTilt } from '../motion/useTilt'

export default function NotFound() {
  const objRef = useRef(null)
  useTilt(objRef, { maxAngle: 12 })

  return (
    <div className="relative isolate w-full pt-28">
      <GradientBackdrop variant="home" />
      <Section bg="light" className="min-h-[75vh] flex items-center justify-center pt-24 pb-20">
        <div className="text-center max-w-xl mx-auto flex flex-col items-center relative z-10">
          {/* Interactive Floating 3D Object with 3D Tilt */}
          <div
            ref={objRef}
            className="size-48 md:size-56 mb-8 cursor-grab will-change-transform float"
            style={{ '--rot': '6deg' }}
          >
            <Obj img={A.obj[2]} className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          <Eyebrow dot="#FFD93D">Error 404</Eyebrow>
          <H as="h1" size="xl" className="mt-4 mb-4">
            Page not <It>found.</It>
          </H>
          <p className="lede text-center mb-8 max-w-[42ch]">
            The requested coordinate has drifted off the radar. Let&apos;s guide you back to our studio floor.
          </p>
          <Button to="/">Return to Home</Button>
        </div>
      </Section>
    </div>
  )
}
