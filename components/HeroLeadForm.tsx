'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertTriangle } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgnpgvv'

export default function HeroLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', message: '' })
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
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Get Your Commercial Roofing Estimate</h2>
      <p className="text-gray-600 mb-6">Fast response. No obligation.</p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800">Thank you for your inquiry!</p>
            <p className="text-sm text-green-700">We&apos;ll contact you within 2 hours during business hours.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800">Something went wrong.</p>
            <p className="text-sm text-red-700">Please try again, or call us directly at (940) 305-2372.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hero-name" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="hero-name"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="hero-phone" className="sr-only">
              Phone Number
            </label>
            <input
              type="tel"
              id="hero-phone"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="hero-email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="hero-email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="hero-message" className="sr-only">
            Project Details
          </label>
          <textarea
            id="hero-message"
            name="message"
            rows={3}
            placeholder="Briefly describe your roofing project (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary justify-center"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Get Your Estimate
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
