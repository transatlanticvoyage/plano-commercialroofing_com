import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Award, CheckCircle, ArrowRight, HardHat, Target, Wrench, FileCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Plano Commercial Roofing — a licensed, insured commercial roofing team serving Plano and the DFW Metroplex.',
  openGraph: {
    title: 'About Us | Plano Commercial Roofing',
    description: 'Learn about Plano Commercial Roofing — a licensed, insured commercial roofing team serving Plano and the DFW Metroplex.',
    url: 'https://planocommercialroofing.com/about',
  },
  alternates: {
    canonical: 'https://planocommercialroofing.com/about',
  },
}

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom pt-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Plano Commercial Roofing
            </h1>
            <p className="text-xl text-gray-700">
              A DFW-based commercial roofing team focused on straightforward
              communication, written estimates, and roofing systems built for what
              North Texas weather actually does to a roof.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Trust, One Roof at a Time
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Plano Commercial Roofing works exclusively on commercial buildings —
                office complexes, retail centers, warehouses, and medical facilities
                across the Dallas-Fort Worth Metroplex. That focus means our crews
                spend their time on low-slope membrane and metal systems, not
                switching back and forth to residential shingle work.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our approach is built on transparent pricing, honest assessments, and
                standing behind our work. We understand that your roof is more than
                just a building component — it&apos;s a critical investment in your
                business&apos;s operations and the assets underneath it.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Every job starts with a written inspection and a real number before
                any work begins, and every installation is carried out to the
                standard the manufacturer requires to keep your warranty valid.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-lg font-bold text-primary-600 mb-1">Licensed &amp; Insured</div>
                  <p className="text-gray-600">Full protection on every job</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-lg font-bold text-primary-600 mb-1">DFW-Based</div>
                  <p className="text-gray-600">Local crews, local knowledge</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/plano-commercial-roofing-company-story.webp"
                alt="A commercial roofing crew loading membrane rolls and tool bags at a Dallas-Fort Worth job site"
                title="A commercial roofing crew loading membrane rolls and tool bags at a Dallas-Fort Worth job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 576px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission &amp; Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by principles that put our clients first and quality above all else
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide reliable commercial roofing solutions that protect businesses and deliver lasting value through honest assessments and quality workmanship.'
              },
              {
                icon: Shield,
                title: 'Integrity First',
                description: 'Transparent pricing, honest assessments, and standing behind our work. Your trust is what keeps a client calling us for the next building, not just this one.'
              },
              {
                icon: Award,
                title: 'Excellence in Craft',
                description: 'Every project gets full attention to detail, using materials matched to the building and installation methods that protect the manufacturer warranty.'
              },
              {
                icon: Wrench,
                title: 'Client Partnership',
                description: 'We view every client as a long-term partner, providing ongoing maintenance support to protect your roofing investment year over year.'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'On-time completion, responsive communication, and 24/7 emergency service when a storm doesn’t wait for business hours.'
              },
              {
                icon: HardHat,
                title: 'Safety Priority',
                description: 'Job-site safety practices and crew training that protect our team and your property throughout every phase of a project.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <item.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/plano-roofing-crew-group-rooftop.webp"
                alt="A commercial roofing crew reviewing a rooftop plan together on a Dallas-Fort Worth job site"
                title="A commercial roofing crew reviewing a rooftop plan together on a Dallas-Fort Worth job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 576px, 100vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-lg text-gray-700 mb-6">
                Every project moves through a small set of dedicated roles, so
                nothing falls through the cracks between the first phone call and
                the final walkthrough.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Estimating', description: 'Walks every roof in person and prices the job from what’s actually up there, not a satellite photo.' },
                  { icon: HardHat, title: 'Field Supervision', description: 'On-site for the full installation or repair, checking work against manufacturer specs as it happens.' },
                  { icon: Wrench, title: 'Installation Crews', description: 'Trained on the specific membrane, metal, or bitumen system going on your roof, not a generalist crew.' },
                  { icon: Shield, title: 'Client Communication', description: 'One point of contact for scheduling, questions, and updates while your project is underway.' },
                ].map((role, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <role.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{role.title}</h3>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The details that matter once a crew is actually on your roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Written Estimates',
                description: 'A real number in writing before work starts, not a verbal ballpark that changes later.'
              },
              {
                title: 'Safety-First Job Sites',
                description: 'Fall protection and job-site safety practices followed on every roof, every time.'
              },
              {
                title: 'Manufacturer-Trained Crews',
                description: 'Installed to the standard your material warranty actually requires.'
              },
              {
                title: 'Local Response',
                description: 'A DFW-based team that can be on-site quickly, not a call center routing to a subcontractor.'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Licensed, bonded, and fully insured for your protection',
                'Manufacturer-trained crews with warranty-compliant installation',
                'A single project contact from start to finish',
                'Transparent pricing with detailed written estimates',
                'Local expertise with deep knowledge of Texas weather',
                'Preventive maintenance programs to extend roof life',
                '24/7 emergency response team for urgent repairs',
                'Insurance claim documentation and direct billing assistance',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Rooted in North Texas
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                As a locally based business, we work throughout Plano and the wider
                DFW Metroplex — the same communities where our crews and their
                families live. That local footprint means we&apos;re not dispatching
                a subcontractor from out of state after a storm; we&apos;re already
                here.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We take that local presence seriously, from how we treat a property
                during a job to how quickly we can respond when North Texas weather
                turns severe.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/plano-tx-community-commercial-district.webp"
                alt="A North Texas commercial business district street with low-rise office and retail buildings"
                title="A North Texas commercial business district street with low-rise office and retail buildings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 576px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Plano Commercial Roofing Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Talk to a DFW-based team that will give you a straight answer about your roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              See Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
