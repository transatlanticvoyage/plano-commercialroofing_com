import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Award, CheckCircle, Users, HardHat, Star, Target, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Plano Commercial Roofing - 20+ years of excellence in commercial roofing. GAF Master Elite certified, fully licensed & insured. Serving DFW businesses.',
  openGraph: {
    title: 'About Us | Plano Commercial Roofing',
    description: 'Learn about Plano Commercial Roofing - 20+ years of excellence in commercial roofing. GAF Master Elite certified, fully licensed & insured.',
    url: 'https://plano-commercialroofing.com/about',
  },
  alternates: {
    canonical: 'https://plano-commercialroofing.com/about',
  },
}

export default function About() {
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
        style={{ backgroundImage: `url('/images/plano-commercial-roofing-company-story.webp')` }}
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
            <p className="eyebrow eyebrow-light">Who We Are</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 text-shadow-hero">
              About Plano Commercial Roofing
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              For over 20 years, we&apos;ve been the trusted roofing partner for businesses across North Texas,
              delivering quality, reliability, and peace of mind with every project.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-6">
                Building Trust, One Roof at a Time
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2004, Plano Commercial Roofing began with a simple mission: to provide North Texas businesses
                with honest, reliable, and professional roofing services. What started as a small team of dedicated
                craftsmen has grown into one of the region&apos;s most respected commercial roofing contractors.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our success is built on a foundation of integrity, quality workmanship, and an unwavering commitment
                to customer satisfaction. We understand that your roof is more than just a building component—it&apos;s
                a critical investment in your business&apos;s future.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we&apos;re proud to be GAF Master Elite® certified, placing us in the top 2% of roofing contractors
                nationwide. This certification reflects our ongoing commitment to excellence and ensures our clients
                receive the best warranties and workmanship in the industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <div className="text-3xl font-extrabold text-primary-500 mb-1">500+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <div className="text-3xl font-extrabold text-primary-500 mb-1">20+</div>
                  <p className="text-gray-600">Years of Excellence</p>
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
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-4">Our Mission &amp; Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by principles that put our clients first and quality above all else
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide superior commercial roofing solutions that protect businesses, exceed expectations, and deliver lasting value through quality craftsmanship and honest service.'
              },
              {
                icon: Shield,
                title: 'Integrity First',
                description: 'We believe in transparent pricing, honest assessments, and standing behind our work. Your trust is our most valuable asset.'
              },
              {
                icon: Award,
                title: 'Excellence in Craft',
                description: 'Every project receives our full attention to detail, using premium materials and proven techniques for lasting results.'
              },
              {
                icon: Users,
                title: 'Client Partnership',
                description: 'We view every client as a long-term partner, providing ongoing support and maintenance to protect your investment.'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'On-time completion, responsive communication, and 24/7 emergency service—we&apos;re here when you need us.'
              },
              {
                icon: HardHat,
                title: 'Safety Priority',
                description: 'Comprehensive safety programs and OSHA compliance ensure protection for our team and your property.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all p-8 border-b-4 border-transparent hover:border-primary-500">
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Crew */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-[320px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/plano-roofing-crew-group-rooftop.webp"
              alt="A commercial roofing crew reviewing a rooftop plan together on a Dallas-Fort Worth job site"
              title="A commercial roofing crew reviewing a rooftop plan together on a Dallas-Fort Worth job site"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your roofing success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'John Matthews',
                title: 'President & Founder',
                experience: '25+ years in commercial roofing'
              },
              {
                name: 'Sarah Johnson',
                title: 'Operations Manager',
                experience: '15+ years project management'
              },
              {
                name: 'Michael Rodriguez',
                title: 'Senior Estimator',
                experience: '18+ years estimation expertise'
              },
              {
                name: 'David Kim',
                title: 'Field Supervisor',
                experience: '20+ years installation experience'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-4">Certifications & Affiliations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'GAF Master Elite®',
                description: 'Top 2% of roofing contractors nationwide'
              },
              {
                title: 'BBB Accredited',
                description: 'A+ rating with Better Business Bureau'
              },
              {
                title: 'NRCA Member',
                description: 'National Roofing Contractors Association'
              },
              {
                title: 'OSHA Certified',
                description: 'Full safety compliance and training'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all p-7 text-center border-b-4 border-transparent hover:border-primary-500">
                <Award className="h-11 w-11 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
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
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-8 text-center">
              Why Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Licensed, bonded, and fully insured for your protection',
                'GAF Master Elite® certified contractor with enhanced warranties',
                'Comprehensive project management from start to finish',
                'Transparent pricing with detailed written estimates',
                'Local expertise with deep knowledge of Texas weather',
                'Dedicated account management for ongoing support',
                'Preventive maintenance programs to extend roof life',
                '24/7 emergency response team for urgent repairs',
                'Direct insurance billing and claim assistance',
                'Environmentally responsible disposal and recycling'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
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
              <p className="eyebrow">Local Roots</p>
              <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-6">
                Committed to Our Community
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                As a locally owned and operated business, we believe in giving back to the community that has
                supported us for over two decades. We&apos;re proud sponsors of local youth sports teams, active
                participants in chamber of commerce events, and regular contributors to North Texas charities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team volunteers hundreds of hours annually for community projects, including providing free
                roofing services for nonprofit organizations and participating in disaster relief efforts following
                severe weather events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Plano Chamber Member',
                  'Youth Sports Sponsor',
                  'Habitat for Humanity Partner',
                  'Storm Relief Volunteer'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
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
      <section className="relative py-20 lg:py-24 bg-primary-600 overflow-hidden">
        <Image
          src="/images/plano-roofing-crew-group-rooftop.webp"
          alt="A commercial roofing crew gathered around rooftop plans on a job site"
          title="A commercial roofing crew gathered around rooftop plans on a job site"
          fill sizes="100vw" className="object-cover opacity-15"
        />
        <div className="container-custom relative text-center">
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-4">
            Experience the Plano Commercial Roofing Difference
          </h2>
          <p className="text-lg text-primary-50 mb-9 max-w-2xl mx-auto">
            Join hundreds of satisfied businesses who trust us with their roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
