import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroLeadForm from '@/components/HeroLeadForm'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Award, CheckCircle, ArrowRight, Star, Phone,
  ThermometerSun, Droplets, Wind, Layers, Wrench, Siren, Sun,
} from 'lucide-react'

const SERVICES = [
  { icon: Sun,      title: 'TPO Roofing Systems',       description: 'Energy-efficient single-ply membrane roofing with excellent durability and weather resistance.' },
  { icon: Droplets, title: 'EPDM Roofing',              description: 'Cost-effective rubber roofing solution with superior waterproofing and longevity.' },
  { icon: Layers,   title: 'Modified Bitumen',          description: 'Multi-layer roofing system providing exceptional protection and flexibility.' },
  { icon: Shield,   title: 'Metal Roofing',             description: 'Long-lasting, low-maintenance roofing with superior energy efficiency.' },
  { icon: Wrench,   title: 'Roof Repair & Maintenance', description: "Preventive maintenance and expert repairs to extend your roof's lifespan." },
  { icon: Siren,    title: '24/7 Emergency Service',    description: 'Rapid response team available for storm damage and urgent repairs.' },
]

const CLIMATE = [
  {
    icon: ThermometerSun,
    title: 'Sustained Summer Heat',
    body: 'A low-slope membrane roof in Plano can sit well above ambient air temperature on a July afternoon. That heat cycle, repeated for months, is what ages seams and softens flashing years before a cooler-climate roof would show the same wear.',
  },
  {
    icon: Wind,
    title: 'Hail and High Wind',
    body: 'North Texas sits inside one of the more active hail corridors in the country. A single severe storm can bruise a membrane, dent metal panels, or lift flashing that looked fine the day before.',
  },
  {
    icon: Droplets,
    title: 'Ponding and Drainage',
    body: 'Flat and low-slope commercial roofs are unforgiving about drainage. A drain that is slightly undersized, or a low spot never corrected during construction, turns into standing water after every heavy DFW downpour.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Michael Thompson',
    company: 'Thompson Property Management',
    text: 'Outstanding service from start to finish. They completed our 50,000 sq ft TPO installation on time and under budget.',
  },
  {
    name: 'Sarah Chen',
    company: 'Retail Solutions Inc.',
    text: 'Their emergency response team saved us after storm damage. Professional, fast, and reliable.',
  },
  {
    name: 'David Martinez',
    company: 'DFW Commercial Properties',
    text: "We've used them for multiple properties. Consistently excellent work and great communication.",
  },
]

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ================================================================ HERO */}
      <section className="relative bg-ink-900 pt-[120px] lg:pt-[150px] pb-28 lg:pb-32 angle-bottom overflow-hidden">
        <Image
          src="/images/plano-commercial-roofing-hero.webp"
          alt="A commercial roofing crew welding a membrane seam on a low-slope Dallas-Fort Worth rooftop at golden hour"
          title="A commercial roofing crew welding a membrane seam on a low-slope Dallas-Fort Worth rooftop at golden hour"
          fill priority sizes="100vw"
          className="object-cover object-[center_38%]"
        />
        {/* Scrim written as an explicit rgba() gradient rather than Tailwind's
            `bg-gradient-to-r from-ink-950/85 ...` utilities.
            WHY: Tailwind v4 compiles those stops to `oklab(... / 0.85)`, and the
            alpha on an oklab gradient stop does not composite correctly here —
            the gradient paints effectively opaque and the hero photo vanishes
            behind a flat charcoal block. Confirmed by hiding this one element
            and watching the photo reappear. Keep this as rgba(). */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(26,29,35,0.92) 0%, rgba(26,29,35,0.72) 38%, rgba(26,29,35,0.28) 70%, rgba(26,29,35,0.10) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(26,29,35,0.75) 0%, rgba(26,29,35,0) 100%)',
          }}
        />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
            <div className="pt-4 lg:pt-10">
              <p className="eyebrow eyebrow-light">Plano Commercial Roofing</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 text-shadow-hero">
                North Texas&apos; Premier
                <span className="text-primary-400 block">Commercial Roofing</span>
                Contractor
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-4">
                Protecting businesses across Plano, Dallas, and the DFW Metroplex with
                superior roofing solutions. 20+ years of excellence, 500+ completed
                projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                From new installations to emergency repairs, we deliver quality
                workmanship backed by industry-leading warranties &mdash; on roofing
                systems built for what North Texas weather actually does to a building.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary">
                  Request an Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href="tel:940-305-2372" className="btn-secondary">
                  <Phone className="mr-2 h-4 w-4" />
                  (940) 305-2372
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary-400" />
                  Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary-400" />
                  GAF Certified
                </span>
                <span className="flex items-center gap-2">
                  <Siren className="h-5 w-5 text-primary-400" />
                  24/7 Emergency Service
                </span>
              </div>
            </div>

            <div className="lg:-mt-2">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== TRUST NUMBERS */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {[
              { stat: '500+', label: 'Projects Completed' },
              { stat: '20+',  label: 'Years Experience' },
              { stat: '100%', label: 'Satisfaction Rate' },
              { stat: '24/7', label: 'Emergency Service' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl lg:text-5xl font-extrabold text-primary-500 mb-1">
                  {item.stat}
                </div>
                <p className="text-gray-600 text-sm font-medium tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== INTRO + IMAGE WITH STAT BADGE */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[470px] rounded-lg overflow-hidden shadow-2xl corner-teal">
              <Image
                src="/images/plano-roofing-crew-project-review.webp"
                alt="A roofing foreman reviewing rooftop plans with a property manager on a Dallas-Fort Worth commercial building's roof"
                title="A roofing foreman reviewing rooftop plans with a property manager on a Dallas-Fort Worth commercial building's roof"
                fill sizes="(min-width: 1024px) 576px, 100vw"
                className="object-cover"
              />
              <div className="absolute left-8 bottom-8 z-10">
                <div className="text-5xl font-extrabold text-white leading-none">#1</div>
                <p className="text-white/90 text-sm mt-1">Commercial Roofing Company</p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Commercial Roofing</p>
              <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-6">
                Commercial Roofing Services for Plano Properties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our commercial roofing services are built around the needs of property
                owners and managers who want dependable roofing, organized
                communication, and a finished system designed for long-term
                performance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every building has different roof conditions, drainage patterns, UV
                exposure, access points, insulation needs, and maintenance concerns. We
                evaluate those details before recommending a roofing system or planning
                an installation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                For commercial roofing in Plano, the goal is simple: protect the
                building, minimize disruption, and help extend roof life with materials
                and installation practices suited to North Texas conditions.
              </p>
              <Link href="/about" className="btn-outline">
                Learn About Our Company
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== TEAL CALL BANNER */}
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="container-custom">
          {/* The photo fills the whole banner and the teal panel is clipped on
              top of it. Laying these out as two grid columns instead leaves a
              white wedge showing through behind the diagonal cut. */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl min-h-[230px]">
            <Image
              src="/images/plano-roofing-crew-inspection-banner.webp"
              alt="A wide view across a large commercial rooftop with a technician inspecting a membrane seam"
              title="A wide view across a large commercial rooftop with a technician inspecting a membrane seam"
              fill sizes="100vw"
              className="object-cover"
            />
            <div
              className="relative md:absolute md:inset-y-0 md:left-0 md:w-[62%] bg-primary-500
                         flex items-center px-8 sm:px-12 py-10 min-h-[230px]
                         md:[clip-path:polygon(0_0,100%_0,calc(100%-4rem)_100%,0_100%)]"
            >
              <div className="flex items-center gap-5">
                <span className="flex items-center justify-center h-14 w-14 rounded-full border-2 border-white/70 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Call Us To Get a Quick
                  </p>
                  <a
                    href="tel:940-305-2372"
                    className="text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-white leading-tight"
                  >
                    (940) 305-2372
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ SERVICES */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow eyebrow-center">What We Do</p>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-4">
              Commercial Roofing Services
            </h2>
            <p className="text-lg text-gray-600">
              From new installations to emergency repairs, we provide comprehensive
              roofing solutions for commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all
                           border-b-4 border-transparent hover:border-primary-500"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-5
                                group-hover:bg-primary-500 transition-colors">
                  <service.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="text-primary-600 font-bold text-sm tracking-wide uppercase
                             hover:text-primary-700 inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= DARK SPLIT — WHY NORTH TEXAS IS HARDER */}
      <section className="relative bg-ink-900 blueprint-bg">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/images/plano-tx-community-commercial-district.webp"
              alt="A North Texas commercial business district of low-rise office and retail buildings at golden hour"
              title="A North Texas commercial business district of low-rise office and retail buildings at golden hour"
              fill sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
            <p className="eyebrow eyebrow-light">Built For This Climate</p>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-5">
              Built for What North Texas Actually Does to a Roof
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-xl">
              DFW commercial roofs deal with a specific combination of stress most
              parts of the country never see in one climate.
            </p>

            <div className="space-y-8">
              {CLIMATE.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-500/15 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-[15px]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= WHY CHOOSE */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow">Why Us</p>
              <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-8">
                Why Businesses Choose Plano Commercial Roofing
              </h2>
              <div className="space-y-4">
                {[
                  'Licensed, bonded, and fully insured for your protection',
                  'GAF Master Elite® certified contractor',
                  'Comprehensive warranties on all installations',
                  'Free detailed roof inspections and estimates',
                  'Dedicated project manager for every job',
                  'Competitive pricing with flexible financing options',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <Link href="/services" className="btn-primary">
                  See All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-[430px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/plano-roofing-crew-group-rooftop.webp"
                alt="A commercial roofing crew gathered around rooftop plans on a Dallas-Fort Worth job site"
                title="A commercial roofing crew gathered around rooftop plans on a Dallas-Fort Worth job site"
                fill sizes="(min-width: 1024px) 576px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= TESTIMONIALS */}
      <section className="bg-ink-900 blueprint-bg py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow eyebrow-light eyebrow-center">Testimonials</p>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400">
              Don&apos;t just take our word for it &mdash; hear from property managers
              and business owners we&apos;ve served.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/[0.045] border border-white/10 rounded-lg p-7 backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-primary-400">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ CTA */}
      <section className="relative bg-primary-600 py-20 lg:py-24 overflow-hidden">
        <Image
          src="/images/plano-commercial-roofing-company-story.webp"
          alt="A commercial roofing crew loading materials at a Dallas-Fort Worth job site"
          title="A commercial roofing crew loading materials at a Dallas-Fort Worth job site"
          fill sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="container-custom relative text-center">
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-4">
            Ready to Protect Your Commercial Property?
          </h2>
          <p className="text-lg text-primary-50 mb-9 max-w-2xl mx-auto">
            Get a free roof inspection and detailed estimate. No obligations, just
            honest expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-white"
            >
              Schedule Free Inspection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href="tel:940-305-2372" className="btn-secondary">
              <Phone className="mr-2 h-4 w-4" />
              (940) 305-2372
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
