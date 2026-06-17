import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const goHome = () => {
    setMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const goToSection = (href: string) => {
    setMenuOpen(false)
    if (isHome) {
      if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/' + href)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome ? 'glass-strong py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="section-padding container-wide flex items-center justify-between" aria-label="Main navigation">
          <div className="flex items-center gap-3">
            <Logo variant="navbar" onClick={goHome} />
            <button
              onClick={goHome}
              className="font-display text-lg md:text-xl font-bold tracking-tight text-text hover:text-accent transition-colors"
            >
              Transform<span className="text-accent">.</span>
            </button>
          </div>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => goToSection(link.href)}
                  className="text-sm text-text-muted hover:text-text transition-colors tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => goToSection('#contact')}
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,114,255,0.35)] transition-all duration-300"
          >
            Let's Talk
          </button>

          <button
            className="lg:hidden p-2 text-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <div className="flex items-center gap-3">
                <Logo variant="hero" onClick={goHome} />
                <button
                  onClick={goHome}
                  className="font-display text-2xl font-bold text-text"
                >
                  Transform<span className="text-accent">.</span>
                </button>
              </div>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => goToSection(link.href)}
                  className="font-display text-3xl font-bold text-text hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => goToSection('#contact')}
                className="mt-4 px-8 py-4 rounded-full bg-accent text-bg font-semibold"
              >
                Let's Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
