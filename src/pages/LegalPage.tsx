import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { legalConfig } from '../data/legal'

interface LegalPageProps {
  title: string
  sections: { title: string; content: string }[]
}

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-bg pt-28 pb-20">
      <div className="section-padding container-wide max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-3">Legal</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-text tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-text-muted text-sm">
            Last updated: {legalConfig.lastUpdated} · {legalConfig.businessName}
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h2 className="font-display text-lg md:text-xl font-bold text-text mb-4">
                  {section.title}
                </h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed font-light whitespace-pre-line">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          <p className="mt-12 text-center text-text-subtle text-xs">
            Questions? Contact{' '}
            <a href="mailto:pawankhot9@gmail.com" className="text-accent hover:underline">
              pawankhot9@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
