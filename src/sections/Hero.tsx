import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Logo } from '../components/ui/Logo'
import { siteConfig } from '../data/content'

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-bg">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#0072ff]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#00c6ff]/8 blur-[100px]" />
      </div>

      <motion.div
        className="absolute top-32 right-[10%] hidden lg:block glass rounded-2xl px-5 py-3"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs text-text-muted">Modern Web Design</span>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[8%] hidden lg:block glass rounded-2xl px-5 py-3"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <span className="text-xs text-accent">Built for Growth</span>
      </motion.div>

      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 section-padding container-wide w-full pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex justify-center lg:justify-start mb-8 lg:hidden"
            >
              <Logo variant="hero" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                Premium Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              <span className="text-gradient block">Transforming</span>
              <span className="text-gradient block">Businesses Into</span>
              <span className="accent-gradient block">Digital Leaders</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 text-lg md:text-xl text-text-muted max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
            >
              Modern websites and digital experiences designed to help businesses
              establish credibility, attract customers, and build a stronger online
              presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_40px_rgba(0,114,255,0.35)] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-sm font-medium hover:border-border-hover transition-all duration-300"
              >
                Let's Talk
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C6FF]/20 to-[#0072FF]/20 blur-3xl scale-110"
                aria-hidden="true"
              />
              <div className="relative logo-glow rounded-3xl">
                <Logo variant="hero-large" showGlow />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs text-accent font-medium"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                TD
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 text-[10px] text-text-muted tracking-widest uppercase"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                Est. {siteConfig.foundedYear}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollTo('#services')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-subtle hover:text-accent transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  )
}
