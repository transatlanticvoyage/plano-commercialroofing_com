'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Shield, Building2 } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Plano</span>
              <span className="text-xs text-primary-600 font-semibold -mt-1">COMMERCIAL ROOFING</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/warranties" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Warranties
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a href="tel:469-555-0100" className="flex items-center space-x-2 text-primary-600 font-bold">
                <Phone className="h-5 w-5" />
                <span>(469) 555-0100</span>
              </a>
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-3">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                Portfolio
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                About
              </Link>
              <Link href="/warranties" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                Warranties
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <div className="px-4 py-4 border-t border-gray-200">
                <a href="tel:469-555-0100" className="flex items-center space-x-2 text-primary-600 font-bold mb-4">
                  <Phone className="h-5 w-5" />
                  <span>(469) 555-0100</span>
                </a>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}