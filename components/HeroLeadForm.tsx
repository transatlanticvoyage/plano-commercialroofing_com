'use client'

import { useState } from 'react'
import { CheckCircle, AlertTriangle } from 'lucide-react'

// Placeholder Formspree endpoint -- LOOKS real on purpose (a REPLACE-ME string
// would ship to production reading like a bug). The real endpoint must be
// swapped in before this form can actually deliver a lead. Shared with
// app/contact/page.tsx so both forms land in one inbox -- see README.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgnpgvv'

const FIELD =
  'w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder:text-gray-500 ' +
  'border border-transparent focus:border-white focus:ring-2 focus:ring-white/70 ' +
  'outline-none transition'

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', address: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative bg-primary-500 rounded-2xl shadow-2xl p-7 lg:p-9 overflow-hidden">
      {/* faint line-art wash, matching the emulation target's quote card */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />

      <div className="relative">
        <h2 className="text-3xl font-extrabold text-white text-center mb-1">
          Get a Quote Now!
        </h2>
        <p className="text-primary-50 text-center text-sm mb-6">
          Fast response. No obligation.
        </p>

        {submitStatus === 'success' && (
          <div className="mb-5 p-4 bg-white rounded-lg flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Thank you for your inquiry!</p>
              <p className="text-sm text-gray-600">
                We&apos;ll contact you within 2 hours during business hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-5 p-4 bg-white rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Something went wrong.</p>
              <p className="text-sm text-gray-600">
                Please try again, or call us directly at (940) 305-2372.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label htmlFor="hero-name" className="sr-only">Your name</label>
            <input
              type="text" id="hero-name" name="name" required
              placeholder="Enter Your Name"
              value={formData.name} onChange={handleChange} className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="hero-email" className="sr-only">Email address</label>
            <input
              type="email" id="hero-email" name="email" required
              placeholder="Email Address"
              value={formData.email} onChange={handleChange} className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="hero-phone" className="sr-only">Mobile number</label>
            <input
              type="tel" id="hero-phone" name="phone" required
              placeholder="Mobile Number"
              value={formData.phone} onChange={handleChange} className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="hero-address" className="sr-only">Property address</label>
            <input
              type="text" id="hero-address" name="address"
              placeholder="Property Address"
              value={formData.address} onChange={handleChange} className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="hero-message" className="sr-only">Message</label>
            <textarea
              id="hero-message" name="message" rows={3}
              placeholder="Message"
              value={formData.message} onChange={handleChange} className={FIELD}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ink-900 text-white font-bold tracking-wider uppercase text-sm
                       px-6 py-4 rounded-md hover:bg-ink-800 transition-colors
                       disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit Form'}
          </button>
        </form>
      </div>
    </div>
  )
}
