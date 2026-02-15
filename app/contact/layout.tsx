import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Plano Commercial Roofing for free roof inspections & estimates. Located at 2929 Custer Rd, Plano TX. Call (469) 555-0100. 24/7 emergency service available.',
  openGraph: {
    title: 'Contact Us | Plano Commercial Roofing',
    description: 'Contact Plano Commercial Roofing for free roof inspections & estimates. Located at 2929 Custer Rd, Plano TX. Call (469) 555-0100.',
    url: 'https://planocommercialroofing.com/contact',
  },
  alternates: {
    canonical: 'https://planocommercialroofing.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}