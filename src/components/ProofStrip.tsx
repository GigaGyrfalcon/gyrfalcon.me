import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROOF_ITEMS } from '../content/profile'

export default function ProofStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="border-y border-white/[0.06] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
          {PROOF_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              className="px-6 py-8 lg:px-10 lg:py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl lg:text-2xl font-bold text-[#f0f0f0] mb-1">{item.value}</p>
              <p className="text-sm font-medium text-blue-400 mb-1">{item.label}</p>
              <p className="text-sm text-[#aaa]">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
