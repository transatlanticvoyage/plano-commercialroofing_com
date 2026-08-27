'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react'

// Drives both the desktop nav and the mobile menu.
// /warranties and /portfolio were removed — neither page exists and both
// 404'd. Re-add them here (and to the footer's Quick Links) if those pages
// get built.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50">
      {/* Utility bar -- email / address / hours, hidden on small screens */}
      <div className="hidden lg:block bg-ink-900 text-gray-300">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-8 h-11 text-[13px]">
            <a
              href="mailto:info@planocommercialroofing.com"
              className="flex items-center gap-2 hover:text-primary-300 transition-colors"
            >
              <Mail className="h-4 w-4 text-primary-400" />
              info@planocommercialroofing.com
            </a>
            <span className="h-4 w-px bg-white/15" />
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-400" />
              2929 Custer Rd, Plano, TX 75075
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary-400" />
              Mon&ndash;Fri: 7AM&ndash;6PM &middot; Emergency 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-lg">
        <div className="flex items-stretch">
          {/* Logo sits in a dark block with an angled right edge */}
          <Link
            href="/"
            className="relative flex items-center gap-3 bg-ink-900 pl-6 sm:pl-10 pr-10 sm:pr-16 py-4
                       [clip-path:polygon(0_0,100%_0,calc(100%-2.25rem)_100%,0_100%)]"
          >
            <Building2 className="h-8 w-8 text-primary-400 flex-shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-extrabold text-white tracking-tight">Plano</span>
              <span className="text-[10px] text-primary-400 font-bold tracking-[0.16em] mt-1">
                COMMERCIAL ROOFING
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-7 pr-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-bold tracking-wider uppercase text-gray-700
                           hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:940-305-2372"
              className="flex items-center gap-2 bg-primary-500 text-white font-bold px-6 py-3
                         rounded-full hover:bg-primary-600 transition-colors shadow-lg
                         shadow-primary-500/30"
            >
              <Phone className="h-4 w-4" />
              <span>(940) 305-2372</span>
            </a>
          </div>

          {/* Mobile: call always visible + menu toggle */}
          <div className="flex lg:hidden flex-1 items-center justify-end gap-2 pr-4">
            <a
              href="tel:940-305-2372"
              aria-label="Call (940) 305-2372"
              className="flex items-center justify-center h-11 w-11 bg-primary-500 text-white
                         rounded-full hover:bg-primary-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-sm font-bold tracking-wider uppercase
                             text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
