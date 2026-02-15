import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Clock, Award, CheckCircle, Building, ArrowRight, Star, Phone, Users, Wrench } from 'lucide-react'

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
                <a href="tel:469-555-0100" className="btn-secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (469) 555-0100
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span>GAF Certified</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10"></div>
              <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                <Building className="h-32 w-32 text-gray-400" />
              </div>
            </div>
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
              <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                <Users className="h-32 w-32 text-gray-400" />
              </div>
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
              { name: 'Plano Office Complex', type: 'TPO Installation', size: '45,000 sq ft' },
              { name: 'Richardson Retail Center', type: 'Metal Roofing', size: '32,000 sq ft' },
              { name: 'Dallas Warehouse', type: 'EPDM Replacement', size: '78,000 sq ft' },
              { name: 'Frisco Medical Building', type: 'Modified Bitumen', size: '28,000 sq ft' },
              { name: 'McKinney Distribution Center', type: 'TPO Restoration', size: '95,000 sq ft' },
              { name: 'Allen Shopping Plaza', type: 'Emergency Repair', size: '15,000 sq ft' },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <Building className="h-16 w-16 text-gray-400" />
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
            <a href="tel:469-555-0100" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              (469) 555-0100
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}