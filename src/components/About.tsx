import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LEADERSHIP_POINTS = [
  'Led end-to-end mobile product development at Natelly from product concept toward production.',
  'Delivered ecommerce and marketplace integration work at Tactable across Shopify and Rakuten-related workflows.',
  'Built reusable component architecture and internal tooling for insurance SaaS at Briza.',
  'Mentored engineers and collaborated closely with product, design, and business stakeholders.',
  'Comfortable owning ambiguous problems, breaking them into deliverable technical plans, and shipping incrementally.',
]

const INFO_CARDS = [
  { label: 'Located in', value: 'Arlington, VA' },
  { label: 'Authorization', value: 'Green Card' },
  { label: 'Sponsorship', value: 'Not required' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-6%' })

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Bio ── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-blue-500" />
              <span className="text-[11px] font-bold text-blue-400 tracking-[0.22em] uppercase">
                About
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#f0f0f0] tracking-tight mb-8 leading-tight">
              Engineering with<br />
              <span className="text-blue-400">ownership</span>
            </h2>

            <div className="space-y-4 text-[#aaa] text-base leading-relaxed mb-8">
              <p>
                I'm a Senior Software Engineer based in Arlington, VA with 12+ years of experience
                building production web and mobile applications across startups, SaaS companies,
                fintech, insurance, ecommerce, and marketplace integrations.
              </p>
              <p>
                My strongest area is frontend and product-facing engineering: React, React Native,
                Next.js, TypeScript, design systems, performance, and accessible UI. I also bring
                practical backend experience with Node.js, GraphQL, PostgreSQL, Supabase, AWS, and
                API integrations, which helps me ship end-to-end without unnecessary handoffs.
              </p>
              <p className="text-[#666] text-sm">
                Green Card · No sponsorship required
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-wrap gap-3">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="bg-[#0d0d0d] border border-white/[0.06] rounded-xl px-4 py-3"
                >
                  <p className="text-xs text-[#888] uppercase tracking-widest mb-0.5">{card.label}</p>
                  <p className="text-sm font-semibold text-[#f0f0f0]">{card.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Leadership ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <p className="text-xs font-bold text-[#888] uppercase tracking-[0.2em] mb-6">
              Leadership &amp; Collaboration
            </p>
            <div className="space-y-3">
              {LEADERSHIP_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-[#0d0d0d] border border-white/[0.06] rounded-xl"
                  initial={{ opacity: 0, x: 18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.09 }}
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <p className="text-sm text-[#aaa] leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
