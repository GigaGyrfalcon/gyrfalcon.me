import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const CALENDLY = 'https://calendly.com/giga-songulashvili/30min'

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      if (y > lastY.current && y > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <motion.header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent',
        ].join(' ')}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="Giga Songulashvili — back to top"
            className="text-[#f0f0f0] font-bold tracking-tight text-lg hover:text-blue-400 transition-colors"
          >
            GS
          </a>

          {/* Desktop anchor links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#777] text-sm hover:text-[#f0f0f0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-[1.03]"
            >
              Book Intro Call
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <motion.span
                className="block w-5 h-[1.5px] bg-[#ccc] origin-center"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-[#ccc] origin-center"
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-[#ccc] origin-center"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            className="fixed inset-0 z-40 bg-[#050505]/97 backdrop-blur-lg flex flex-col pt-20 px-6 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-bold text-[#f0f0f0] hover:text-blue-400 transition-colors py-3 border-b border-white/[0.06]"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="mt-auto flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center py-4 bg-blue-500 text-white text-lg font-medium rounded-2xl"
              >
                Book Intro Call
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center py-4 border border-white/10 text-[#ccc] text-lg font-medium rounded-2xl"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent floating CTA on mobile after scroll */}
      <AnimatePresence>
        {scrolled && !menuOpen && (
          <motion.div
            className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-xl shadow-blue-500/30"
            >
              Book Intro Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
