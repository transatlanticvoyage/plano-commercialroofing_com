import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Navigation />

      {/* Page Hero.
          Decorative backdrop is a CSS background rather than <Image fill>:
          the <Image fill> element here loaded and laid out correctly
          (naturalWidth set, opacity 1, full-size rect) but never actually
          painted — it stayed invisible even when forced to z-index 9999 with
          an outline. A CSS background renders reliably and needs no alt text,
          which is correct for a purely decorative backdrop anyway. Content
          images further down these pages still use <Image> and work fine. */}
      <section
        className="relative bg-ink-900 pt-[150px] lg:pt-[210px] pb-28 lg:pb-36 angle-bottom overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/plano-commercial-roofing-office-exterior.webp')` }}
      >
        {/* backdrop is a CSS background on the section -- see note there */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(26,29,35,0.90) 0%, rgba(26,29,35,0.72) 45%, rgba(26,29,35,0.35) 100%)',
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-light">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 text-shadow-hero">
              Get Your Free Roofing Consultation
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Contact North Texas&apos; trusted commercial roofing experts.
              We respond to all inquiries within 2 hours during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="font-bold mb-1">Call Us</h3>
              <a href="tel:940-305-2372" className="text-primary-600 hover:text-primary-700">
                (940) 305-2372
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="font-bold mb-1">Email</h3>
              <a href="mailto:info@planocommercialroofing.com" className="text-primary-600 hover:text-primary-700 text-sm">
                info@planocommercialroofing.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="font-bold mb-1">Office</h3>
              <p className="text-sm text-gray-600">
                2929 Custer Rd<br />
                Plano, TX 75075
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="font-bold mb-1">Hours</h3>
              <p className="text-sm text-gray-600">
                Mon-Fri: 7AM-6PM<br />
                Emergency: 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us + Emergency */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Free detailed roof inspections',
                  'No-obligation written estimates',
                  'GAF Master Elite® certified',
                  'Licensed, bonded & insured',
                  '24/7 emergency service',
                  'Competitive pricing & financing',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:940-305-2372" className="btn-primary mt-8">
                <Phone className="mr-2 h-5 w-5" />
                Call (940) 305-2372 for a Free Estimate
              </a>
            </div>

            <div className="bg-ink-900 rounded-lg shadow-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-primary-400" />
                <h3 className="text-2xl font-bold">Emergency Service Available</h3>
              </div>
              <p className="mb-4">
                Storm damage? Severe leak? Our emergency response team is available 24/7
                to protect your property and minimize damage.
              </p>
              <a
                href="tel:940-305-2372"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-bold tracking-wide uppercase text-sm rounded-md hover:bg-primary-600 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Plano, serving commercial properties throughout the DFW Metroplex
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/plano-commercial-roofing-office-exterior.webp"
              alt="A commercial office building exterior with a covered entrance and landscaped entry, similar to our Plano, TX office"
              title="A commercial office building exterior with a covered entrance and landscaped entry, similar to our Plano, TX office"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Plano Office</h3>
              <p className="text-gray-600">
                2929 Custer Rd<br />
                Plano, TX 75075
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Service Area</h3>
              <p className="text-gray-600">
                Dallas-Fort Worth Metroplex<br />
                50-mile radius from Plano
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Response Time</h3>
              <p className="text-gray-600">
                Same-day estimates<br />
                2-hour emergency response
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
