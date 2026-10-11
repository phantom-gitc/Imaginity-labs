'use client'

import { useEffect, useRef, useState } from 'react'
import { A } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { Obj } from '../components/ui/Img'
import { Button } from '../components/ui/Button'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Check, Mail, MapPin, Users, Copy, Paperclip } from 'lucide-react'

import { fireConfetti } from '../lib/confetti'

export default function Contact() {
  const root = useRef(null)
  useReveal(root)

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    scope: '',
    message: '',
    website: '', // honeypot field
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const mountTime = useRef(0)

  const [roleParam, setRoleParam] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('hello.imaginitylabs@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  useEffect(() => {
    mountTime.current = Date.now()
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const role = params.get('role')
    if (role) {
      queueMicrotask(() => {
        setRoleParam(role)
        setFormState((prev) => ({
          ...prev,
          service: `Job Application: ${role}`,
          message: `Hi Imaginity team,\n\nI would like to apply for the ${role} position.`,
        }))
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          _timestamp: mountTime.current,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch enquiry. Please try again.')
      }

      setSubmitted(true)
      fireConfetti()
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please email us directly at hello.imaginitylabs@gmail.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="contact" />
      <Section bg="light" className="pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <Eyebrow intro dot="#FFD93D">Start a conversation</Eyebrow>
            <H as="h1" intro size="xl" className="mt-4 mb-4">
              Let&apos;s build something <It>enduring.</It>
            </H>
            <p className="lede text-lg mb-10">
              Tell us about your product, timeline, and ambitions. We review all inquiries and respond within one business day.
            </p>

            {/* Career / CV Submission Alert Banner */}
            {(roleParam || formState.service.toLowerCase().includes('job') || formState.service.toLowerCase().includes('resume') || formState.service.toLowerCase().includes('career') || formState.service.toLowerCase().includes('cv')) && (
              <div className="p-6 rounded-[24px] bg-[#E9E4FF] border border-[#3B5BFF]/30 mb-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-xl bg-[#3B5BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-base">
                      {roleParam ? `Applying for ${roleParam}?` : 'Applying for a Career Role?'}
                    </h4>
                    <p className="text-sm text-ink/75 mt-1 leading-relaxed">
                      To send your CV, resume, or portfolio attachments directly to our founding engineers, please submit your application via email to{' '}
                      <strong className="text-ink font-semibold">hello.imaginitylabs@gmail.com</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`mailto:hello.imaginitylabs@gmail.com?subject=${encodeURIComponent(roleParam ? `Application for ${roleParam}` : 'Job Application / Resume')}&body=${encodeURIComponent(`Hi Imaginity Labs team,\n\nI would like to apply for ${roleParam || 'an open role'}.\n\nPlease find my CV / Resume and portfolio attached to this email.\n\nFull Name: \nPhone Number: \nLinkedIn / Portfolio: \n\nLooking forward to speaking with you!`)}`}
                    className="btn btn-primary btn-sm inline-flex items-center gap-2"
                  >
                    <Mail size={14} /> Open Email Client &amp; Send CV
                  </a>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={handleCopyEmail}
                    className="btn btn-outline btn-sm inline-flex items-center gap-2 bg-white"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                  </button>
                </div>
              </div>
            )}

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
              <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Honeypot field for bot detection (hidden from human users) */}
                <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1, pointerEvents: 'none' }}>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  />
                </div>

                <div className="field">
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    id="name"
                    placeholder=" "
                    disabled={isSubmitting}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <label htmlFor="name">Your Name &amp; Company</label>
                </div>

                <div className="field">
                  <input
                    suppressHydrationWarning
                    type="email"
                    required
                    id="email"
                    placeholder=" "
                    disabled={isSubmitting}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  <label htmlFor="email">Work Email Address</label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="field">
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="service"
                      placeholder=" "
                      disabled={isSubmitting}
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    />
                    <label htmlFor="service">Primary Interest</label>
                  </div>

                  <div className="field">
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="scope"
                      placeholder=" "
                      disabled={isSubmitting}
                      value={formState.scope}
                      onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    />
                    <label htmlFor="scope">Target Scope / Timeline</label>
                  </div>
                </div>

                <div className="field pt-4">
                  <textarea
                    suppressHydrationWarning
                    rows={4}
                    required
                    id="message"
                    placeholder=" "
                    disabled={isSubmitting}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                  <label htmlFor="message">Project Brief &amp; Context</label>
                </div>

                <div className="pt-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Dispatching Brief...' : 'Submit Brief'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Visual & Live Status Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[28px] bg-[#E9E4FF]/60 border border-line relative overflow-hidden">
              <div className="flex justify-center my-6">
                <div className="size-48 relative">
                  <Obj img={A.obj[0]} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/10">
                <div className="flex items-center gap-3 text-sm text-ink/80">
                  <Mail size={16} className="text-[#3B5BFF]" />
                  <a href="mailto:hello.imaginitylabs@gmail.com" className="hover:text-[#3B5BFF] transition-colors focus-visible:underline">
                    hello.imaginitylabs@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink/80">
                  <MapPin size={16} className="text-[#3B5BFF]" />
                  <span>Bhubaneswar &middot; Global Remote First</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 border border-black/[0.08] space-y-2 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink/60">Career &amp; CV Submission</span>
                    <span className="text-[10px] font-mono font-medium text-[#3B5BFF] bg-[#3B5BFF]/10 px-2 py-0.5 rounded-full">Direct Mail</span>
                  </div>
                  <p className="text-xs text-ink/70">
                    Applying for engineering or design? Email your CV and portfolio directly with file attachments intact.
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="mailto:hello.imaginitylabs@gmail.com?subject=Resume%20Submission%20-%20Job%20Application&body=Hi%20Imaginity%20Labs%20team%2C%0D%0A%0D%0APlease%20find%20my%20CV%2FResume%20attached.%0D%0A%0D%0AName%3A%20%0D%0APhone%3A%20%0D%0APortfolio%20%2F%20LinkedIn%3A%20"
                      className="text-xs font-semibold text-[#3B5BFF] hover:underline inline-flex items-center gap-1"
                    >
                      <Paperclip size={12} /> Send CV via Email &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-[#FFF3B0]/60 border border-line flex items-center gap-4">
              <div className="size-10 rounded-full bg-yellow flex items-center justify-center text-ink">
                <Users size={18} strokeWidth={2.2} />
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

