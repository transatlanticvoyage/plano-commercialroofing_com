import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroLeadForm from '@/components/HeroLeadForm'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Award, CheckCircle, ArrowRight, Star, Phone, Wrench, ThermometerSun, Droplets, Wind } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom pt-16 pb-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                North Texas&apos; Premier
                <span className="text-primary-600 block">Commercial Roofing</span>
                Contractor
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Protecting businesses across Plano, Dallas, and the DFW Metroplex with superior roofing solutions.
                20+ years of excellence, 500+ completed projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary">
                  Get Free Roof Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:940-305-2372" className="btn-secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (940) 305-2372
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span>GAF Certified</span>
                </div>
              </div>
            </div>
            <div>
              <HeroLeadForm />
            </div>
          </div>
        </div>
        <div className="container-custom relative">
          <div className="relative h-[280px] lg:h-[360px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/plano-commercial-roofing-hero.webp"
              alt="A two-person roofing crew heat-welding a seam on a white TPO membrane roof of a Dallas-Fort Worth commercial building"
              title="A two-person roofing crew heat-welding a seam on a white TPO membrane roof of a Dallas-Fort Worth commercial building"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1152px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <p className="text-gray-600">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Texas Roofs Need Specialized Care */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for What North Texas Actually Does to a Roof
            </h2>
            <p className="text-xl text-gray-600">
              DFW commercial roofs deal with a specific combination of stress most parts
              of the country never see in one climate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <ThermometerSun className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustained Summer Heat</h3>
              <p className="text-gray-600">
                A low-slope membrane roof in Plano can sit well above ambient air
                temperature on a July afternoon. That heat cycle, repeated for months,
                is what ages seams and softens flashing years before a cooler-climate
                roof would show the same wear. Reflective membrane and correct seam
                welding matter more here than almost anywhere else.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hail and High Wind</h3>
              <p className="text-gray-600">
                North Texas sits inside one of the more active hail corridors in the
                country. A single severe storm can bruise a membrane, dent metal
                panels, or lift flashing that looked fine the day before. Roofs built
                and repaired here need to hold up to that reality, not just a
                textbook installation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ponding and Drainage</h3>
              <p className="text-gray-600">
                Flat and low-slope commercial roofs are unforgiving about drainage.
                A drain that&apos;s slightly undersized or a low spot that was never
                corrected during construction turns into standing water after every
                heavy DFW downpour &mdash; and standing water is the fastest way to
                shorten a membrane&apos;s life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Roofing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new installations to emergency repairs, we provide comprehensive roofing solutions for commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TPO Roofing Systems',
                description: 'Energy-efficient single-ply membrane roofing with excellent durability and weather resistance.',
              },
              {
                title: 'EPDM Roofing',
                description: 'Cost-effective rubber roofing solution with superior waterproofing and longevity.',
              },
              {
                title: 'Modified Bitumen',
                description: 'Multi-layer roofing system providing exceptional protection and flexibility.',
              },
              {
                title: 'Metal Roofing',
                description: 'Long-lasting, low-maintenance roofing with superior energy efficiency.',
              },
              {
                title: 'Roof Repair & Maintenance',
                description: 'Preventive maintenance and expert repairs to extend your roof\'s lifespan.',
              },
              {
                title: '24/7 Emergency Service',
                description: 'Rapid response team available for storm damage and urgent repairs.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn About Our Company
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/plano-roofing-crew-project-review.webp"
                alt="A roofing foreman reviewing rooftop plans with a property manager on a Dallas-Fort Worth commercial building's roof"
                title="A roofing foreman reviewing rooftop plans with a property manager on a Dallas-Fort Worth commercial building's roof"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 576px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise across various commercial properties in the DFW area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Plano Office Complex', type: 'TPO Installation', size: '45,000 sq ft', image: 'plano-office-building-commercial-roof' },
              { name: 'Richardson Retail Center', type: 'Metal Roofing', size: '32,000 sq ft', image: 'dfw-retail-center-commercial-roof' },
              { name: 'Dallas Warehouse', type: 'EPDM Replacement', size: '78,000 sq ft', image: 'dfw-warehouse-commercial-roof' },
              { name: 'Frisco Medical Building', type: 'Modified Bitumen', size: '28,000 sq ft', image: 'dfw-medical-building-commercial-roof' },
              { name: 'McKinney Distribution Center', type: 'TPO Restoration', size: '95,000 sq ft', image: 'dfw-distribution-center-commercial-roof' },
              { name: 'Allen Shopping Plaza', type: 'Emergency Repair', size: '15,000 sq ft', image: 'dfw-shopping-plaza-commercial-roof' },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`/images/${project.image}.webp`}
                    alt={`${project.name} -- ${project.type} commercial roofing project in the Dallas-Fort Worth area`}
                    title={`${project.name} -- ${project.type} commercial roofing project in the Dallas-Fort Worth area`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.type}</p>
                  <p className="text-primary-600 font-semibold">{project.size}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from property managers and business owners we&apos;ve served.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                text: 'We&apos;ve used them for multiple properties. Consistently excellent work and great communication.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA Banner */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/plano-roofing-crew-inspection-banner.webp"
            alt="A roofing technician inspecting a membrane seam on a commercial rooftop, clipboard in hand"
            title="A roofing technician inspecting a membrane seam on a commercial rooftop, clipboard in hand"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure If It&apos;s a Repair or a Replacement?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            A free inspection gives you a straight answer either way, in writing,
            before anyone recommends a number.
          </p>
          <a href="tel:940-305-2372" className="btn-primary bg-primary-500 hover:bg-primary-400">
            <Phone className="mr-2 h-5 w-5" />
            Call (940) 305-2372
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Commercial Property?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free roof inspection and detailed estimate. No obligations, just honest expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Schedule Free Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:940-305-2372" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              (940) 305-2372
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
