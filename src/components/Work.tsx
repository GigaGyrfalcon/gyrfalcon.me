import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CASE_STUDIES, LINKS } from '../content/profile'

type CaseStudy = typeof CASE_STUDIES[number]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.article
      ref={ref}
      className="group relative flex flex-col bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 44 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top gradient accent on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header row */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="text-[11px] font-bold text-blue-400 tracking-[0.18em] uppercase">
            {study.company}
          </span>
          <p className="text-xs text-[#aaa] mt-0.5">{study.period}</p>
        </div>
        <span className="text-xs text-[#666] border border-white/[0.07] px-2 py-1 rounded-full whitespace-nowrap">
          {study.role}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[1.1rem] font-semibold text-[#f0f0f0] leading-snug mb-5">
        {study.title}
      </h3>

      {/* Structured details */}
      <div className="space-y-3 mb-5 flex-1">
        <div>
          <p className="text-[10px] font-bold text-[#555] tracking-[0.18em] uppercase mb-1">Problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#555] tracking-[0.18em] uppercase mb-1">What I owned</p>
          <p className="text-sm text-[#aaa] leading-relaxed">{study.ownership}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#555] tracking-[0.18em] uppercase mb-1">Outcome</p>
          <p className="text-sm text-[#ccc] leading-relaxed">{study.outcome}</p>
        </div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {study.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-[#aaa] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Why it matters */}
      <div className="flex items-start gap-3 pt-4 border-t border-white/[0.06]">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
        <p className="text-xs text-[#777] leading-relaxed italic">{study.whyItMatters}</p>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          className="mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-blue-500" />
            <span className="text-[11px] font-bold text-blue-400 tracking-[0.22em] uppercase">
              Selected Work
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#f0f0f0] tracking-tight">
            Projects that shipped
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.company} study={study} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={LINKS.resume}
            download={LINKS.resumeDownloadName}
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-blue-400 transition-colors border border-white/[0.06] hover:border-blue-500/20 px-5 py-2.5 rounded-xl"
          >
            Download Resume PDF for full experience
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M12 16l-4-4m4 4l4-4m-4 4V4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

