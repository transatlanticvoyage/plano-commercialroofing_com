import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, Clock, Award, CheckCircle, Building, ArrowRight, Phone, Wrench, HardHat, AlertTriangle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'TPO Roofing Systems',
      description: 'Thermoplastic Polyolefin (TPO) roofing provides exceptional energy efficiency and durability for commercial properties.',
      features: [
        'Energy Star rated reflective surface',
        'Heat-welded seams for superior waterproofing',
        '15-30 year manufacturer warranties',
        'Resistant to UV radiation and chemical exposure',
        'Ideal for flat and low-slope roofs',
      ],
      benefits: [
        'Reduces cooling costs by up to 30%',
        'Environmentally friendly and recyclable',
        'Low maintenance requirements',
        'Class A fire rating',
      ]
    },
    {
      title: 'EPDM Roofing',
      description: 'Ethylene Propylene Diene Monomer (EPDM) rubber roofing offers proven performance and cost-effectiveness.',
      features: [
        'Exceptional weather resistance',
        'Flexible in extreme temperatures',
        '20-30 year life expectancy',
        'Available in black or white membranes',
        'Suitable for various roof designs',
      ],
      benefits: [
        'Most cost-effective flat roof solution',
        'Minimal disruption during installation',
        'Excellent hail resistance',
        'Easy to repair and maintain',
      ]
    },
    {
      title: 'Modified Bitumen',
      description: 'Multi-layer roofing system combining asphalt with modifiers for enhanced performance and durability.',
      features: [
        'Multiple application methods available',
        'Reinforced with fiberglass or polyester',
        'Granulated cap sheet options',
        'Self-adhering options available',
        'Excellent puncture resistance',
      ],
      benefits: [
        'Superior waterproofing capabilities',
        'Performs well in high-traffic areas',
        'UV resistant surface options',
        'Compatible with various insulation types',
      ]
    },
    {
      title: 'Metal Roofing',
      description: 'Standing seam and corrugated metal roofing systems for maximum longevity and minimal maintenance.',
      features: [
        '40-70 year life expectancy',
        'Standing seam and R-panel options',
        'Available in multiple colors and finishes',
        'Wind resistant up to 140 mph',
        'Fire resistant materials',
      ],
      benefits: [
        'Lowest lifecycle cost',
        'Energy efficient with cool roof coatings',
        '100% recyclable materials',
        'Virtually maintenance-free',
      ]
    },
    {
      title: 'Roof Repair & Maintenance',
      description: 'Comprehensive repair services and preventive maintenance programs to maximize your roof investment.',
      features: [
        'Emergency leak repairs',
        'Annual inspection programs',
        'Preventive maintenance contracts',
        'Warranty repairs',
        'Storm damage assessment',
      ],
      benefits: [
        'Extends roof lifespan by 5-10 years',
        'Prevents costly emergency repairs',
        'Maintains manufacturer warranties',
        'Priority emergency response',
      ]
    },
    {
      title: '24/7 Emergency Service',
      description: 'Rapid response team available around the clock for storm damage and urgent roofing emergencies.',
      features: [
        'Response within 2 hours',
        'Temporary repairs and tarping',
        'Insurance claim assistance',
        'Full restoration services',
        'Direct insurance billing',
      ],
      benefits: [
        'Minimizes interior damage',
        'Protects business operations',
        'Professional documentation for claims',
        'Guaranteed response time',
      ]
    }
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom pt-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Commercial Roofing Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Complete roofing solutions for businesses across North Texas. From new installations to emergency repairs, 
              we deliver quality workmanship backed by industry-leading warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:469-555-0100" className="btn-secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Licensed & Insured</h3>
              <p className="text-gray-600">Complete protection for your property and peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GAF Master Elite Contractor</h3>
              <p className="text-gray-600">Top 2% of roofing contractors nationwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Rapid response when you need it most</p>
            </div>
          </div>

          {/* Detailed Service Sections */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16' : ''}`}>
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/contact" className="btn-primary">
                          Get Quote for {service.title}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                        {index === 5 ? (
                          <AlertTriangle className="h-32 w-32 text-gray-400" />
                        ) : index === 4 ? (
                          <Wrench className="h-32 w-32 text-gray-400" />
                        ) : (
                          <HardHat className="h-32 w-32 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to project completion, we follow a proven process to ensure exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', description: 'Discuss your needs and schedule an on-site inspection' },
              { step: '2', title: 'Detailed Inspection', description: 'Comprehensive roof assessment with photo documentation' },
              { step: '3', title: 'Custom Proposal', description: 'Detailed estimate with multiple options and warranties' },
              { step: '4', title: 'Professional Installation', description: 'Expert installation with minimal disruption to your business' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving commercial properties throughout the Dallas-Fort Worth Metroplex
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Plano', 'Dallas', 'Richardson', 'Allen',
              'Frisco', 'McKinney', 'Garland', 'Carrollton',
              'Lewisville', 'Irving', 'Arlington', 'Fort Worth',
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <Building className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Roofing Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed estimate from North Texas&apos; trusted commercial roofing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Schedule Consultation
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