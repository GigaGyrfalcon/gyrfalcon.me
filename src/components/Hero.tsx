import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { LINKS } from '../content/profile'

const HEADLINE_WORDS = [
  'Senior', 'Software', 'Engineer', 'building', 'high-performance',
  'React,', 'React', 'Native,', 'and', 'TypeScript', 'products.',
]

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
}

const wordChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

// Reduced-motion variant — fade only, no vertical movement
const reducedWordChild = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '72px 72px',
        }}
      />
      {/* Radial glow at top-right */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-500/[0.06] blur-3xl" />

      <motion.div
        style={prefersReducedMotion ? {} : { y: yParallax, opacity: opacityFade }}
        className="max-w-7xl mx-auto px-5 lg:px-12 w-full py-20 lg:py-28"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Role label */}
            <motion.div
              className="flex items-center gap-2.5 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Senior Software Engineer
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              className="text-[#aaa] text-base font-medium mb-3 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Giga Songulashvili
            </motion.p>

            {/* Animated headline */}
            <motion.h1
              className="text-[clamp(1.9rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#f0f0f0] mb-6"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              aria-label="Senior Software Engineer building high-performance React, React Native, and TypeScript products."
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={prefersReducedMotion ? reducedWordChild : wordChild}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-[#aaa] text-lg leading-relaxed mb-4 max-w-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              Frontend-first engineer with 12+ years of experience delivering production web and
              mobile applications, supported by pragmatic Node.js, GraphQL, PostgreSQL, Supabase,
              and AWS backend delivery.
            </motion.p>

            {/* Work authorization */}
            <motion.p
              className="text-[#666] text-sm mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Based in Arlington, VA · Green Card · No sponsorship required
            </motion.p>

            {/* Primary & secondary CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/25"
              >
                Book Intro Call
                <svg
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={LINKS.resume}
                download={LINKS.resumeDownloadName}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/20 text-[#bbb] hover:text-white font-medium rounded-xl transition-all duration-200"
              >
                Download Resume PDF
              </a>
            </motion.div>

            {/* Tertiary text links */}
            <motion.div
              className="flex flex-wrap items-center gap-5 text-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <span className="w-px h-3 bg-white/10" aria-hidden="true" />
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <span className="w-px h-3 bg-white/10" aria-hidden="true" />
              <a
                href={`mailto:${LINKS.email}`}
                className="text-[#666] hover:text-blue-400 transition-colors"
              >
                {LINKS.email}
              </a>
            </motion.div>
          </div>

          {/* ── Right: Portrait ── */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px]">
              {/* Glow halo */}
              <div className="absolute inset-0 bg-blue-500/[0.08] rounded-[2rem] blur-3xl scale-125" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/[0.07] bg-[#0d0d0d]">
                <img
                  src="/photo.jpg"
                  alt="Professional headshot of Giga Songulashvili, Senior Software Engineer"
                  width="380"
                  height="380"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent" />
              </div>

              {/* Floating badge — experience */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl px-4 py-3 shadow-xl shadow-black/40"
                animate={prefersReducedMotion ? { y: 0 } : { y: [0, -7, 0] }}
                transition={prefersReducedMotion ? {} : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs text-[#888] mb-0.5 uppercase tracking-widest">Experience</p>
                <p className="text-xl font-bold text-[#f0f0f0]">
                  12+ <span className="text-blue-400 text-base">yrs</span>
                </p>
              </motion.div>

              {/* Floating badge — location */}
              <motion.div
                className="absolute -top-5 -right-5 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl px-4 py-3 shadow-xl shadow-black/40"
                animate={prefersReducedMotion ? { y: 0 } : { y: [0, 8, 0] }}
                transition={prefersReducedMotion ? {} : { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              >
                <p className="text-xs text-[#888] mb-0.5 uppercase tracking-widest">Based in</p>
                <p className="text-sm font-semibold text-[#f0f0f0]">
                  Arlington, <span className="text-blue-400">VA</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[#444] text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-blue-500/60 to-transparent"
          animate={prefersReducedMotion ? { scaleY: 1 } : { scaleY: [0, 1, 0], originY: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
