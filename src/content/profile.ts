/** Single source of truth for all site content. Edit here, not in components. */

export const LINKS = {
  calendly: 'https://calendly.com/giga-songulashvili/30min',
  linkedin: 'https://www.linkedin.com/in/songulashvili/',
  github: 'https://github.com/GigaGyrfalcon',
  email: 'giga.songulashvili@gmail.com',
  resume: '/resume.pdf',
  resumeDownloadName: 'Giga-Songulashvili-Senior-Software-Engineer-Resume.pdf',
}

export const PROOF_ITEMS = [
  {
    value: '12+',
    label: 'Production engineering',
    sub: 'Web, mobile, SaaS, fintech, ecommerce',
  },
  {
    value: 'Senior / Lead',
    label: 'Ownership level',
    sub: 'Architecture, delivery, mentoring',
  },
  {
    value: 'Frontend-first',
    label: 'Core expertise',
    sub: 'React, React Native, Next.js, TypeScript',
  },
  {
    value: 'End-to-end',
    label: 'Supporting backend',
    sub: 'Node.js, GraphQL, PostgreSQL, Supabase, AWS',
  },
]

export const RECRUITER_FACTS = [
  {
    label: 'Role Target',
    value: 'Senior Frontend Engineer · Senior Full-Stack Engineer · Lead Frontend Engineer',
  },
  {
    label: 'Core Stack',
    value: 'React · React Native · TypeScript · Next.js · Node.js · GraphQL · PostgreSQL',
  },
  {
    label: 'Location / Authorization',
    value: 'Arlington, VA · Green Card · No sponsorship required',
  },
  {
    label: 'Industries',
    value: 'FinTech · Insurance SaaS · Ecommerce/Marketplace · Mobile Products',
  },
  {
    label: 'Work Style',
    value: 'Remote/hybrid friendly · Product-focused teams · Ownership-heavy roles',
  },
]

export const CASE_STUDIES = [
  {
    company: 'Tactable',
    period: '2023–2025',
    role: 'Senior Software Engineer',
    title: 'Rakuten × Shopify Merchant Workflows',
    problem:
      'Merchants needed a reliable way to manage products, inventory, and marketplace workflows between Shopify and Rakuten Ichiba.',
    ownership:
      'Built and maintained React, Node.js, TypeScript, GraphQL, PostgreSQL, and Shopify API features supporting product, inventory, order, and authentication workflows.',
    outcome:
      'Helped evolve Shopify app capabilities, migrated API integrations to newer Shopify API versions, and upgraded authentication from cookie-based sessions to token-based sessions with continuity for existing workflows.',
    whyItMatters:
      'Shows ability to work in complex ecommerce integrations, modernize legacy API flows, and ship production changes without disrupting business-critical merchant operations.',
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Shopify Admin API', 'REST', 'Webhooks'],
  },
  {
    company: 'Natelly',
    period: '2025–Present',
    role: 'Lead Engineer / Product Engineer',
    title: 'Mobile-First Social Good Product',
    problem:
      'The product needed a full mobile-first foundation: authentication, feeds, matching, profile flows, media, backend data model, and deployment path.',
    ownership:
      'Architected and built the mobile app, backend workflows, data model, media pipeline, and supporting admin/product infrastructure from zero toward production.',
    outcome:
      'Delivered core cross-platform mobile flows using React Native, Expo, Supabase, PostgreSQL, Jotai, AWS S3, and CloudFront, including scalable media handling and real-time product features.',
    whyItMatters:
      'Shows end-to-end ownership, product thinking, mobile-first UX, and ability to move from idea to working software without heavy handoffs.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Jotai', 'AWS S3', 'CloudFront'],
  },
  {
    company: 'Briza Insurance',
    period: '2021–2022',
    role: 'Senior Frontend / Full-Stack Engineer',
    title: 'Framework-Agnostic Component Architecture',
    problem:
      'Insurance SaaS workflows needed reusable UI components and internal tools that could work across different frontend environments.',
    ownership:
      'Built reusable Web Components and internal carrier integration tooling used across React, Vue, and vanilla JavaScript environments.',
    outcome:
      'Improved consistency and reuse across broker-facing experiences by centralizing UI patterns into a shared component library.',
    whyItMatters:
      'Shows design system experience, reusable frontend architecture, SaaS product delivery, and cross-framework thinking.',
    tech: ['StencilJS', 'React', 'Vue', 'TypeScript', 'Node.js', 'PostgreSQL', 'Jest', 'Cypress', 'Storybook'],
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Frontend Engineering',
    items: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
      'Tailwind CSS', 'Material UI', 'Angular', 'Vue.js', 'StencilJS',
      'Framer Motion', 'Responsive UI', 'Accessibility', 'Performance Optimization',
    ],
  },
  {
    category: 'Mobile Engineering',
    items: [
      'React Native', 'Expo', 'Mobile-first UX', 'App Navigation',
      'Push Notifications', 'Media Handling', 'Offline-aware Flows',
    ],
  },
  {
    category: 'Backend / API Delivery',
    items: [
      'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Webhooks',
      'Authentication', 'Supabase Edge Functions', 'PHP / Laravel',
    ],
  },
  {
    category: 'Data / Cloud',
    items: [
      'PostgreSQL', 'MySQL', 'Supabase', 'AWS S3', 'CloudFront',
      'Azure Data Factory', 'Azure Data Lake', 'Railway',
    ],
  },
  {
    category: 'Testing / Quality',
    items: [
      'Jest', 'Cypress', 'Puppeteer', 'Unit Testing', 'E2E Testing',
      'TDD', 'Storybook', 'Code Review',
    ],
  },
  {
    category: 'Architecture / Leadership',
    items: [
      'Design Systems', 'Web Components', 'API Integrations',
      'Technical Documentation', 'Mentoring', 'Agile / Scrum',
      'Cross-functional Delivery',
    ],
  },
]

export const EXPERIENCE_ITEMS = [
  {
    company: 'Natelly',
    role: 'Lead Engineer',
    period: '2025–Present',
    stack: 'React Native · Expo · Supabase · PostgreSQL · AWS S3 · CloudFront',
    summary: 'Leading end-to-end product engineering for a mobile-first social good platform.',
  },
  {
    company: 'Tactable',
    role: 'Senior Software Engineer',
    period: '2023–2025',
    stack: 'React · TypeScript · Node.js · GraphQL · PostgreSQL · Shopify API',
    summary:
      'Built and modernized ecommerce and marketplace integration workflows across Shopify and Rakuten-related systems.',
  },
  {
    company: 'Briza Insurance',
    role: 'Senior Software Engineer',
    period: '2021–2022',
    stack: 'StencilJS · React · Vue · Node.js · PostgreSQL · Jest · Cypress',
    summary: 'Built reusable frontend architecture and internal SaaS tooling for insurance API workflows.',
  },
  {
    company: 'Earlier Experience',
    role: 'EPAM Systems · Adjarabet · UniPAY · Freelance/Consulting',
    period: 'Pre-2021',
    stack: '',
    summary:
      'Earlier work across fintech, gaming, payment platforms, reusable UI systems, and full-stack web applications.',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What roles is Giga Songulashvili targeting?',
    answer:
      'Giga is targeting Senior Frontend Engineer, Senior Full-Stack Engineer, and Lead Frontend Engineer roles at US-based product companies.',
  },
  {
    question: 'What technologies does Giga specialize in?',
    answer:
      'Giga specializes in React, React Native, TypeScript, Next.js, Node.js, GraphQL, PostgreSQL, Supabase, AWS, design systems, frontend architecture, and mobile-first product development.',
  },
  {
    question: 'Is Giga authorized to work in the United States?',
    answer: 'Yes. Giga is based in Arlington, Virginia and has a Green Card. No sponsorship is required.',
  },
  {
    question: 'What industries has Giga worked in?',
    answer:
      'Giga has worked across fintech, insurance SaaS, ecommerce and marketplace integrations, mobile products, gaming, and cloud/data engineering environments.',
  },
  {
    question: 'How can recruiters contact Giga?',
    answer:
      'Recruiters can book an intro call, download the resume, connect on LinkedIn, review GitHub, or email directly at giga.songulashvili@gmail.com.',
  },
]
