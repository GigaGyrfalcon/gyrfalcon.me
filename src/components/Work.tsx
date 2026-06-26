import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CASE_STUDIES = [
  {
    company: 'Tactable',
    period: '2023 – 2025',
    context: 'Boutique cloud, data, and AI engineering firm serving enterprise clients.',
    title: 'Rakuten × Shopify Integration',
    ownership:
      "Developed and maintained Shopify app features enabling US merchants to list and manage products on Rakuten Ichiba (Japan\u2019s largest marketplace) through unified Shopify workflows.",
    tech: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Shopify API'],
    outcome:
      'Led API migration to newer Shopify API versions with zero downtime; upgraded auth from cookie-based to token-based sessions.',
  },
  {
    company: 'Natelly',
    period: '2025 – Present',
    context: 'Social good startup leveraging mobile technology for community engagement.',
    title: 'Cross-Platform Mobile App',
    ownership:
      'Architected and built the entire product from zero to production — mobile app, admin panel, backend workflows, and cloud infrastructure.',
    tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'AWS S3', 'CloudFront', 'Jotai'],
    outcome:
      'Delivered real-time social features, scalable media pipeline (S3 + CloudFront), push notifications, and automated backend workflows — end-to-end solo.',
  },
  {
    company: 'Briza Insurance',
    period: '2021 – 2022',
    context: 'SaaS startup connecting insurance carriers to brokerages via API.',
    title: 'Web Components Library',
    ownership:
      'Built a framework-agnostic Web Components library and internal carrier integration tooling used across React, Vue, and vanilla JS environments.',
    tech: ['StencilJS', 'React', 'Vue', 'Node.js', 'PostgreSQL', 'Jest', 'Cypress'],
    outcome:
      'Enabled consistent broker experiences across multiple frontend frameworks from a single shared component library.',
  },
]

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
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
    >
      {/* Top gradient accent on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold text-blue-400 tracking-[0.18em] uppercase">
            {study.company}
          </span>
          <p className="text-xs text-[#aaa] mt-0.5">{study.period}</p>
        </div>
        <span className="text-xs text-[#888] border border-white/[0.07] px-2 py-1 rounded-full">
          {study.tech.length} tech
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[1.15rem] font-semibold text-[#f0f0f0] leading-snug mb-3">
        {study.title}
      </h3>

      {/* Context */}
      <p className="text-xs text-[#aaa] mb-4">{study.context}</p>

      {/* Ownership */}
      <p className="text-sm text-[#aaa] leading-relaxed mb-6 flex-1">{study.ownership}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {study.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-[#aaa] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Outcome */}
      <div className="flex items-start gap-3 pt-4 border-t border-white/[0.06]">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
        <p className="text-sm text-[#ccc] leading-relaxed">{study.outcome}</p>
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
      </div>
    </section>
  )
}
