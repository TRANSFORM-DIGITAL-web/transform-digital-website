import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from '../hooks/useLenis'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/ui/WhatsAppFloat'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Projects } from '../sections/Projects'
import { ComingSoon } from '../sections/ComingSoon'
import { WhyChooseUs } from '../sections/WhyChooseUs'
import { Process } from '../sections/Process'
import { Founder } from '../sections/Founder'
import { About } from '../sections/About'
import { FAQ } from '../sections/FAQ'
import { Contact } from '../sections/Contact'

export function HomePage() {
  useLenis()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location.hash])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <ComingSoon />
        <WhyChooseUs />
        <Process />
        <Founder />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
