import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { GitHubIcon } from '../ui/GitHubIcon'
import { Logo } from '../ui/Logo'
import { navLinks, siteConfig } from '../../data/content'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const goToSection = (href: string) => {
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
    <footer className="relative border-t border-border bg-bg-elevated">
      <div className="section-padding container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo variant="footer" onClick={() => goToSection('#hero')} />
            </div>
            <p className="mt-3 font-display text-lg font-bold text-text">
              Transform<span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-text-muted text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => goToSection(link.href)}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-5">
              GitHub
            </h3>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              TRANSFORM-DIGITAL-web
            </a>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-text-subtle mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-subtle">
            <Link to="/privacy-policy" className="hover:text-text transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-text transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
