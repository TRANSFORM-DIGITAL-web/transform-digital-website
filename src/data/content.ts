export const siteConfig = {
  name: 'Transform Digital',
  tagline: 'Transforming Businesses Into Digital Leaders',
  logo: '/images/logo.png',
  foundedYear: 2024,
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  email: 'pawankhot9@gmail.com',
  phone: '+91 9702839072',
  whatsapp: '919702839072',
  github: 'https://github.com/TRANSFORM-DIGITAL-web',
}

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 'gym-websites',
    title: 'Gym Websites',
    description:
      'Professional websites designed for gyms, fitness studios, and personal trainers.',
    icon: 'dumbbell' as const,
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description:
      'High-converting landing pages designed to generate inquiries and leads.',
    icon: 'layout' as const,
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    description:
      'Modern websites that help businesses establish a professional online presence.',
    icon: 'building' as const,
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern digital experiences.',
    icon: 'refresh' as const,
  },
]

export const featuredProjects = [
  {
    id: 'transform-fitness',
    title: 'Transform Fitness Demo',
    description:
      'A premium fitness website concept featuring membership plans, trainer profiles, gallery sections, lead generation functionality, and responsive design.',
    liveUrl: 'https://tranceform-fitness-gym-demo-pjjltuzhk.vercel.app/',
    githubUrl: 'https://github.com/TRANSFORM-DIGITAL-web/tranceform-fitness-demo',
    image: '/images/projects/fitness.png',
    tags: ['React', 'Responsive', 'Lead Gen'],
  },
  {
    id: 'elite-gym',
    title: 'Elite Gym Landing Page',
    description:
      'A conversion-focused gym landing page designed to maximize membership inquiries and free trial registrations.',
    liveUrl: 'https://demo-gym-landing-page.vercel.app/',
    githubUrl: 'https://github.com/TRANSFORM-DIGITAL-web/elite-gym-landing-page-DEMO',
    image: '/images/projects/elite.png',
    tags: ['Landing Page', 'Conversion', 'Mobile First'],
  },
]

export const comingSoonProjects = [
  {
    id: 'churnx',
    title: 'ChurnX',
    description:
      'AI-powered customer feedback intelligence platform that transforms customer feedback into actionable business insights.',
    status: 'Coming Soon',
  },
  {
    id: 'feedback-analyser',
    title: 'Feedback Analyser',
    description:
      'Advanced sentiment analysis and feedback intelligence solution designed to help businesses understand customer experiences.',
    status: 'Coming Soon',
  },
]

export const whyChooseUs = [
  {
    title: 'Modern Design',
    description: 'Professional designs that build trust and credibility.',
    icon: 'palette' as const,
  },
  {
    title: 'Mobile Optimized',
    description: 'Seamless experiences across all devices.',
    icon: 'smartphone' as const,
  },
  {
    title: 'Performance Focused',
    description: 'Fast-loading websites built for modern users.',
    icon: 'zap' as const,
  },
  {
    title: 'Growth Mindset',
    description: 'Solutions designed to strengthen online presence.',
    icon: 'trending-up' as const,
  },
  {
    title: 'Transparent Approach',
    description: 'No fake promises. No misleading claims. Just quality work.',
    icon: 'shield-check' as const,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding goals and requirements.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Creating the right strategy and structure.',
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'Building the complete solution.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploying professionally.',
  },
  {
    step: '05',
    title: 'Support',
    description: 'Helping businesses improve over time.',
  },
]

export const founder = {
  name: 'Pawan Khot',
  role: 'Founder & Developer',
  image: '/images/founder.png',
  github: 'https://github.com/TRANSFORM-DIGITAL-web',
  story: [
    "Hi, I'm Pawan Khot, founder of Transform Digital.",
    "I'm an MCA student and passionate web developer focused on helping businesses establish a strong digital presence through modern websites and digital solutions.",
    'Transform Digital was created with a simple mission:',
    'I believe every business deserves a professional online presence that reflects the quality of their work and helps them stand out in an increasingly digital world.',
  ],
  missionHighlight: 'Transform businesses into digital leaders.',
}

export const faqs = [
  {
    question: 'How long does a website take to build?',
    answer:
      'Timeline depends on scope and complexity. A landing page typically takes 1–2 weeks, while a full business website may take 3–6 weeks. We discuss timelines clearly during the discovery phase.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Yes. We specialize in transforming outdated websites into modern, responsive digital experiences that better represent your brand and convert visitors into customers.',
  },
  {
    question: 'Do you create mobile responsive websites?',
    answer:
      'Absolutely. Every website we build is fully responsive and tested across mobile, tablet, and desktop devices to ensure a seamless experience everywhere.',
  },
  {
    question: 'Can I request custom functionality?',
    answer:
      'Yes. From contact forms and booking systems to custom integrations, we work with you to build features that match your business needs.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer ongoing support and maintenance to keep your website updated, secure, and performing at its best after launch.',
  },
]
