import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RECRUITER_FACTS, LINKS } from '../content/profile'

export default function RecruiterQuickFacts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-6%' })

  return (
    <section
      id="recruiter-facts"
      aria-label="Recruiter Quick Facts"
      className="py-16 lg:py-20 bg-[#070707] border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <motion.div
          ref={ref}
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span className="text-[11px] font-bold text-blue-400 tracking-[0.22em] uppercase">
              For Recruiters
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#f0f0f0] tracking-tight">
            Recruiter Quick Facts
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECRUITER_FACTS.map((fact, i) => (
            <motion.div
              key={fact.label}
              className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 hover:border-blue-500/20 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold text-blue-400 tracking-[0.18em] uppercase mb-2">
                {fact.label}
              </p>
              <p className="text-sm text-[#ddd] leading-relaxed">{fact.value}</p>
            </motion.div>
          ))}

          {/* Links card */}
          <motion.div
            className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 hover:border-blue-500/20 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.45,
              delay: RECRUITER_FACTS.length * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-xs font-bold text-blue-400 tracking-[0.18em] uppercase mb-2">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <a
                href={LINKS.resume}
                download={LINKS.resumeDownloadName}
                className="text-sm text-[#aaa] hover:text-blue-400 transition-colors"
              >
                Resume PDF
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#aaa] hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#aaa] hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="text-sm text-[#aaa] hover:text-blue-400 transition-colors"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
