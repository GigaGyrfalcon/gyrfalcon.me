import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FAQ_ITEMS } from '../content/profile'

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-3%' })
  const answerId = `faq-answer-${index}`

  return (
    <motion.div
      ref={ref}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className="border border-white/[0.06] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <button
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 lg:p-6 text-left bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-200"
      >
        <span itemProp="name" className="text-sm font-medium text-[#ddd] leading-relaxed">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-0.5 text-[#555] text-xl leading-none select-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p
              itemProp="text"
              className="px-5 lg:px-6 pb-5 text-sm text-[#aaa] leading-relaxed bg-[#0d0d0d]"
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 border-t border-white/[0.06]"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-5 lg:px-12">
        <motion.div
          ref={headingRef}
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-blue-500" />
            <span className="text-[11px] font-bold text-blue-400 tracking-[0.22em] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-[#f0f0f0] tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
