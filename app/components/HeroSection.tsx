'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Meridian Wealth Partners'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Building Generational Wealth'

  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Fee-Only Fiduciary Advisors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 font-semibold transition-colors text-center"
            >
              Schedule Consultation
            </a>
            <a
              href="/services"
              className="px-8 py-3 border border-slate-500 text-slate-200 rounded-lg hover:bg-primary-800 font-semibold transition-colors text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
