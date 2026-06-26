import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE_ITEMS, LINKS } from '../content/profile'

type ExperienceItem = typeof EXPERIENCE_ITEMS[number]

function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      className="md:pl-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline dot */}
      <div
        className="hidden md:block absolute left-0 top-3.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-[#050505]"
        aria-hidden="true"
      />

      <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 lg:p-6 hover:border-blue-500/20 transition-colors duration-200">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-base font-semibold text-[#f0f0f0]">{item.company}</h3>
            <p className="text-sm text-blue-400">{item.role}</p>
          </div>
          <span className="text-xs text-[#555] border border-white/[0.06] px-2.5 py-1 rounded-full whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-[#aaa] leading-relaxed mb-2">{item.summary}</p>
        {item.stack && (
          <p className="text-xs text-[#555]">{item.stack}</p>
        )}
      </div>
    </motion.div>
  )
}

export default function ExperienceSnapshot() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#070707] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
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
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#f0f0f0] tracking-tight">
            Experience Snapshot
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[5px] top-4 bottom-4 w-px bg-white/[0.06] hidden md:block"
            aria-hidden="true"
          />
          <div className="space-y-4">
            {EXPERIENCE_ITEMS.map((item, i) => (
              <ExperienceRow key={item.company} item={item} index={i} />
            ))}
          </div>
        </div>

        <motion.p
          className="mt-10 text-sm text-[#555]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Full details available in the{' '}
          <a
            href={LINKS.resume}
            download={LINKS.resumeDownloadName}
            className="text-blue-400 hover:underline"
          >
            resume PDF
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
