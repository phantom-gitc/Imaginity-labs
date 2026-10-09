import { useRef, useState } from 'react'
import { A } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { Obj } from '../components/ui/Img'
import { Button } from '../components/ui/Button'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Check, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const root = useRef(null)
  useReveal(root)

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Product Engineering',
    budget: '$25k - $50k',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="contact" />
      <Section bg="light" className="pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <Eyebrow dot="#FFD93D">Start a conversation</Eyebrow>
            <H as="h1" size="xl" className="mt-4 mb-4">
              Let&apos;s build something <It>enduring.</It>
            </H>
            <p className="lede text-lg mb-10">
              Tell us about your product, timeline, and ambitions. We review all inquiries and respond within one business day.
            </p>

            {submitted ? (
              <div className="p-8 rounded-[24px] bg-[#DDF5E6] border border-[#167A4A]/20">
                <div className="size-12 rounded-full bg-[#167A4A] text-white flex items-center justify-center mb-4">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h3 className="display text-2xl text-ink font-semibold">Message dispatched!</h3>
                <p className="text-sm text-ink/75 mt-2 leading-relaxed max-w-[40ch]">
                  Thank you for reaching out. One of our partners will review your notes and reply by tomorrow morning.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="field">
                  <input
                    type="text"
                    required
                    id="name"
                    placeholder=" "
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <label htmlFor="name">Your Name &amp; Company</label>
                </div>

                <div className="field">
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder=" "
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  <label htmlFor="email">Work Email Address</label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="mono text-xs text-ink/50 uppercase block mb-2">Primary Interest</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-line py-2 text-ink text-sm outline-none focus:border-[#3B5BFF]"
                    >
                      <option>Product Engineering</option>
                      <option>AI &amp; Agents</option>
                      <option>Automation Workflows</option>
                      <option>Cloud Architecture</option>
                      <option>Design Systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="mono text-xs text-ink/50 uppercase block mb-2">Estimated Budget</label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-line py-2 text-ink text-sm outline-none focus:border-[#3B5BFF]"
                    >
                      <option>$12k - $25k (Sprint)</option>
                      <option>$25k - $50k (Squad)</option>
                      <option>$50k+ (Enterprise Partner)</option>
                      <option>Exploring / Undetermined</option>
                    </select>
                  </div>
                </div>

                <div className="field pt-4">
                  <textarea
                    rows={4}
                    required
                    id="message"
                    placeholder=" "
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                  <label htmlFor="message">Project Brief &amp; Context</label>
                </div>

                <div className="pt-4">
                  <Button type="submit">Submit Brief</Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Visual & Live Status Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[28px] bg-[#E9E4FF]/60 border border-line relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <span className="live-dot" />
                <span className="mono text-xs font-semibold text-ink">LIVE STUDIO STATUS: ACCEPTING Q4 BRIEFS</span>
              </div>

              <div className="flex justify-center my-6">
                <div className="size-48 relative">
                  <Obj img={A.obj[0]} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/10">
                <div className="flex items-center gap-3 text-sm text-ink/80">
                  <Mail size={16} className="text-[#3B5BFF]" />
                  <span>hello@nexoralabs.io</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink/80">
                  <MapPin size={16} className="text-[#3B5BFF]" />
                  <span>Hyderabad &middot; Global Remote First</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FFF3B0]/60 border border-line flex items-center gap-4">
              <div className="size-10 rounded-full bg-yellow flex items-center justify-center font-bold text-ink">
                âœ¦
              </div>
              <div>
                <h4 className="font-semibold text-sm text-ink">Direct Partner Access</h4>
                <p className="text-xs text-ink/70">All calls are taken by our founding partners, never SDRs.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

