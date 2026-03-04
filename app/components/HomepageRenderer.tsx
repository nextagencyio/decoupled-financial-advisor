'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { TrendingUp, Shield, PieChart, Briefcase, DollarSign, LineChart } from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const wealthServices = [
  { icon: TrendingUp, title: 'Investment Management', description: 'Disciplined, research-driven portfolio management tailored to your risk tolerance and long-term objectives.' },
  { icon: Shield, title: 'Risk Management', description: 'Comprehensive strategies to protect your wealth against market volatility and unforeseen circumstances.' },
  { icon: PieChart, title: 'Retirement Planning', description: 'Personalized retirement strategies to ensure financial independence and a comfortable lifestyle.' },
  { icon: Briefcase, title: 'Estate Planning', description: 'Structured wealth transfer and estate strategies to preserve your legacy for future generations.' },
  { icon: DollarSign, title: 'Tax Optimization', description: 'Strategic tax planning to minimize liabilities and maximize after-tax returns on your investments.' },
  { icon: LineChart, title: 'Financial Planning', description: 'Holistic financial planning that aligns your investments, insurance, and estate with your life goals.' },
]

const credentials = [
  'CFP Certified',
  'Fiduciary Standard',
  'SEC Registered',
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Wealth Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Comprehensive Wealth Management
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our integrated approach to wealth management ensures every aspect of your financial life works together toward your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wealthServices.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
              Professional Standards & Certifications
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {credentials.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[TrendingUp, Shield, PieChart, Briefcase, DollarSign, LineChart].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Firm
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Trusted Partners in Wealth
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              With decades of experience and a fiduciary commitment, we put your interests first.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop', alt: 'Financial planning consultation' },
              { src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80&fit=crop', alt: 'Professional office environment' },
              { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&fit=crop', alt: 'Financial analysis and reporting' },
              { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Client meeting' },
            ].map((photo, i) => (
              <div key={i} className="relative h-56 rounded-lg overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-primary-800">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-accent-400 font-bold text-xs">MW</span>
                </div>
                <span className="text-lg font-bold text-white font-display">Meridian Wealth Partners</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fee-only fiduciary financial advisors dedicated to building and protecting generational wealth through personalized strategies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Investment Management</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Retirement Planning</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Estate Planning</a></li>
                <li><a href="/services" className="hover:text-accent-400 transition-colors">Tax Optimization</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/advisors" className="hover:text-accent-400 transition-colors">Our Advisors</a></li>
                <li><a href="/resources" className="hover:text-accent-400 transition-colors">Resources</a></li>
                <li><a href="/about" className="hover:text-accent-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li>900 Wealth Management Drive, Suite 400</li>
                <li>Boston, MA 02110</li>
                <li className="pt-1">
                  <a href="mailto:info@meridianwealth.com" className="hover:text-accent-400 transition-colors">info@meridianwealth.com</a>
                </li>
                <li>
                  <a href="tel:5555678910" className="hover:text-accent-400 transition-colors">(555) 567-8910</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Meridian Wealth Partners. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
