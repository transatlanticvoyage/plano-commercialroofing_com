import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Plano Commercial Roofing collects, uses, and protects the information you submit through this website.',
  alternates: {
    canonical: 'https://planocommercialroofing.com/privacy',
  },
}

export default function Privacy() {
  const updated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <Navigation />

      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom pt-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What we collect</h2>
          <p className="text-gray-700 mb-4">
            If you submit the estimate request form on this site, Plano Commercial Roofing
            receives the name, company name, email address, phone number, project type,
            and message you enter into it. If you call us, we have your phone number and
            whatever you tell us. That is the whole list — we do not ask for payment
            details through this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What we do with it</h2>
          <p className="text-gray-700 mb-4">
            We use it to contact you back and to prepare an estimate or schedule the
            inspection you requested. We do not sell it, rent it, or trade it to
            marketing lists.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Who else sees it</h2>
          <p className="text-gray-700 mb-4">
            Form submissions pass through a third-party form-handling service in order
            to reach our inbox, and this website is hosted by a provider that keeps
            standard server logs (IP address, page requested, timestamp, browser type).
            Neither is used by us for advertising.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Cookies and tracking</h2>
          <p className="text-gray-700 mb-4">
            This site uses Plausible, a privacy-friendly analytics service that does not
            use cookies and does not track individuals across sites. No advertising
            cookies are set on this site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">How long we keep it</h2>
          <p className="text-gray-700 mb-4">
            Inquiries and job records are kept for as long as we need them for service
            history, warranty, and accounting purposes, and then deleted.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Your choices</h2>
          <p className="text-gray-700 mb-4">
            You can ask us what we hold about you, ask us to correct it, or ask us to
            delete it. Call (940) 305-2372 or email info@planocommercialroofing.com and
            say so — there is no form to fill in.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Children</h2>
          <p className="text-gray-700 mb-4">
            This site is not directed at children and we do not knowingly collect
            information from anyone under 13.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Changes</h2>
          <p className="text-gray-700 mb-4">
            If this policy changes, the revised version will appear on this page with a
            new date at the top.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p className="text-gray-700">
            Plano Commercial Roofing, 2929 Custer Rd, Plano, TX 75075.<br />
            Phone (940) 305-2372 · info@planocommercialroofing.com
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
