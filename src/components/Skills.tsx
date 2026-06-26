import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILL_GROUPS } from '../content/profile'

type SkillGroupData = typeof SKILL_GROUPS[number]

// Sub-component so each card can call useInView individually (hooks can't be inside .map())
function SkillGroup({ group, index }: { group: SkillGroupData; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      className={`bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6`}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="text-[11px] font-bold text-blue-400 tracking-[0.2em] uppercase mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-sm text-[#ddd] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1.5 rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#070707] border-y border-white/[0.06]">
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
              Technical Skills
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#f0f0f0] tracking-tight">
            Technical skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup
              key={group.category}
              group={group}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
