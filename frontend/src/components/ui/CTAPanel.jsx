import { Button } from './Button'
import { Eyebrow, H, It } from './Type'

/** Blue→violet CTA panel (28px radius). */
export function CTAPanel({
  title,
  line = 'Tell us what you are building. We reply within one working day.',
  eyebrow = 'Start a project',
  primaryBtn = { label: 'Start a project', to: '/contact', variant: 'yellow' },
  secondaryBtn = { label: 'See our work', to: '/work', variant: 'ghost-light' },
}) {
  return (
    <section data-bg="light" className="section-tight">
      <div className="wrap">
        <div className="relative isolate overflow-hidden rounded-[28px] p-8 text-white md:p-16" style={{ background: 'var(--grad-cta)' }}>
          <div className="grain-local" aria-hidden="true" />
          <div className="blob -right-24 -top-24 h-[420px] w-[420px] opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgb(255 255 255 / .35) 1px, transparent 1.4px)', backgroundSize: '28px 28px', maskImage: 'linear-gradient(120deg, #000, transparent 60%)', WebkitMaskImage: 'linear-gradient(120deg, #000, transparent 60%)' }} />
          <div className="relative">
            <div className="flex max-w-3xl flex-col items-start gap-6">
              <Eyebrow dot="#FFD93D" className="!text-white/70">{eyebrow}</Eyebrow>
              <H size="xl">{title || (<>Let&apos;s build something <It>remarkable</It></>)}</H>
              <p data-reveal="up" className="max-w-[34ch] text-white/75">{line}</p>
              <div data-reveal="up" className="flex flex-wrap gap-3 pt-2">
                {primaryBtn && (
                  <Button
                    to={primaryBtn.to}
                    href={primaryBtn.href}
                    onClick={primaryBtn.onClick}
                    variant={primaryBtn.variant || 'yellow'}
                  >
                    {primaryBtn.label}
                  </Button>
                )}
                {secondaryBtn && (
                  <Button
                    to={secondaryBtn.to}
                    href={secondaryBtn.href}
                    onClick={secondaryBtn.onClick}
                    variant={secondaryBtn.variant || 'ghost-light'}
                  >
                    {secondaryBtn.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
