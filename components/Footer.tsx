import Link from 'next/link'
import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-gray-400">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <Building2 className="h-8 w-8 text-primary-400" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold text-white tracking-tight">Plano</span>
                <span className="text-[10px] text-primary-400 font-bold tracking-[0.16em] mt-1">
                  COMMERCIAL ROOFING
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              North Texas&apos; trusted commercial roofing contractor. Licensed, bonded,
              and insured with over 20 years of experience.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5
                             hover:bg-primary-500 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/services', label: 'Our Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/warranties', label: 'Warranties' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>Commercial Roof Installation</li>
              <li>Roof Repair &amp; Maintenance</li>
              <li>TPO Roofing Systems</li>
              <li>EPDM Roofing</li>
              <li>Modified Bitumen</li>
              <li>Metal Roofing</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>
                  2929 Custer Rd<br />
                  Plano, TX 75075
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:940-305-2372" className="hover:text-primary-400 transition-colors">
                  (940) 305-2372
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@planocommercialroofing.com"
                  className="hover:text-primary-400 transition-colors break-all"
                >
                  info@planocommercialroofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Plano Commercial Roofing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
