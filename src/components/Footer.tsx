import { motion } from 'framer-motion'
import { LINKS } from '../content/profile'

const CALENDLY = LINKS.calendly
const LINKEDIN = LINKS.linkedin
const GITHUB = LINKS.github
const EMAIL = LINKS.email

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-28">

        {/* CTA Block */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-[clamp(2rem,5vw,4rem)] font-bold text-[#f0f0f0] tracking-tight mb-4 leading-tight"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Interested in discussing a{' '}
            <span className="text-blue-400">Senior&nbsp;/ Lead</span>{' '}
            engineering role?
          </motion.h2>

          <motion.p
            className="text-[#555] text-lg mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm open to Senior Frontend, Senior Full-Stack, and Lead Frontend opportunities with
            product-focused teams in the US.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/25"
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
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={LINKS.resume}
              download={LINKS.resumeDownloadName}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-[#bbb] hover:text-white font-medium rounded-xl transition-all duration-200"
            >
              Download Resume PDF
            </a>
          </motion.div>
        </div>

        {/* Social + contact links with visible labels */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'LinkedIn', href: LINKEDIN, external: true },
            { label: 'GitHub', href: GITHUB, external: true },
            { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
          ].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-4 py-2 border border-white/[0.07] text-[#666] hover:text-blue-400 hover:border-blue-500/30 rounded-xl text-sm transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} Giga Songulashvili. Built with React + Vite.
          </p>
          <p className="text-xs text-[#555]">Arlington, VA · Green Card · No sponsorship required</p>
        </div>

      </div>
    </footer>
  )
}
