import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecruiterQuickFacts from './components/RecruiterQuickFacts'
import ProofStrip from './components/ProofStrip'
import Work from './components/Work'
import Skills from './components/Skills'
import ExperienceSnapshot from './components/ExperienceSnapshot'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercept anchor clicks so Lenis handles scroll smoothly instead of the browser
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      e.preventDefault()
      lenis.scrollTo(hash, { offset: -64 })
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      {/* Skip to main content — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:z-[100] focus-visible:top-4 focus-visible:left-4 focus-visible:bg-blue-500 focus-visible:text-white focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-lg focus-visible:text-sm focus-visible:font-medium"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <RecruiterQuickFacts />
        <ProofStrip />
        <Work />
        <Skills />
        <ExperienceSnapshot />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
