export const profile = {
  name: 'Ha Thai Son',
  shortName: 'TS',
  greeting: "Hello, I'm",
  roles: ['Developer', 'Editor', 'MC'],
  tagline:
    'I build modern web experiences, tell stories through videos, and connect with audiences as an MC.',
  aboutShort:
    'Passionate about creativity and technology. I love turning ideas into real products and memorable experiences.',
  aboutLong:
    "I'm a developer, video editor, and event host based in Vietnam. Over the past 2+ years I've shipped web apps end to end, cut cinematic travel and brand videos, and hosted 30+ live events on stage. I care about clean interfaces, tight storytelling, and making audiences feel something — whether that's through a product, a video, or a live mic.",
  aboutIntro:
    "I'm Nguyen Thai Son, a passionate developer, video editor, and MC who loves creating digital products, telling stories through videos, and connecting with audiences.",
  quote:
    'Every line of code, every frame I edit, and every stage I step on is a step closer to creating impact.',
  email: 'hason.ls.it@gmail.com',
  location: 'Ha Noi, Vietnam',
  phone: '098 4614 762',
  cvUrl: '#',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'box' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'videos', label: 'Videos', icon: 'play' },
  { id: 'mc-host', label: 'MC / Host', icon: 'mic' },
  { id: 'blog', label: 'Blog', icon: 'file' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
] as const

export const whatIDo = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React, Tailwind, Node.js',
  },
  {
    icon: 'rocket',
    title: 'UI/UX Design',
    description: 'Figma, Responsive Design, User Experience',
  },
  {
    icon: 'clapperboard',
    title: 'Video Editing',
    description: 'Premiere Pro, After Effects, Color Grading, Effects',
  },
  {
    icon: 'lightbulb',
    title: 'Content Creation',
    description: 'Storytelling, Script Writing, Creative Direction',
  },
  {
    icon: 'mic',
    title: 'MC / Host',
    description: 'Event Hosting, Stage Presentation',
  },
]

export const stats = [
  { icon: 'code', value: '2+', label: 'Years Experience' },
  { icon: 'folder', value: '15+', label: 'Projects Completed' },
  { icon: 'play-circle', value: '20+', label: 'Videos Edited' },
  { icon: 'mic', value: '30+', label: 'Events Hosted' },
  { icon: 'users', value: '100%', label: 'Client Satisfaction' },
]

export const journey = [
  {
    year: '2022',
    title: 'Started My Journey',
    description: 'Began exploring web development and discovered my passion for building things on the internet.',
  },
  {
    year: '2023',
    title: 'Grow & Improve',
    description: 'Worked on multiple projects, improved my skills in frontend development and learned video editing.',
  },
  {
    year: '2024',
    title: 'Expand & Connect',
    description: 'Expanded my skills into MC & hosting, created content, and connected with amazing people.',
  },
  {
    year: 'Now',
    title: 'Building The Future',
    description: 'Continuing to learn, create and deliver value through code, videos and live experiences.',
  },
]

export const whatIDoTabs = [
  {
    id: 'development',
    label: 'Development',
    tools: [
      { name: 'HTML5', icon: 'html5', color: 'text-orange-500', bg: 'bg-orange-500/10' },
      { name: 'CSS3', icon: 'css3', color: 'text-blue-500', bg: 'bg-blue-500/10' },
      { name: 'JavaScript', icon: 'js', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
      { name: 'React', icon: 'react', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      { name: 'Tailwind CSS', icon: 'tailwind', color: 'text-teal-400', bg: 'bg-teal-400/10' },
      { name: 'Node.js', icon: 'node', color: 'text-green-500', bg: 'bg-green-500/10' },
      { name: 'Figma', icon: 'figma', color: 'text-pink-500', bg: 'bg-pink-500/10' },
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'After Effects', icon: 'aftereffects', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    ],
  },
  {
    id: 'video-editing',
    label: 'Video Editing',
    tools: [
      { name: 'Premiere Pro', icon: 'premiere', color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'After Effects', icon: 'aftereffects', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'CapCut', icon: 'capcut', color: 'text-slate-200', bg: 'bg-slate-400/10' },
      { name: 'DaVinci Resolve', icon: 'davinci', color: 'text-rose-400', bg: 'bg-rose-400/10' },
      { name: 'Color Grading', icon: 'color', color: 'text-amber-400', bg: 'bg-amber-400/10' },
      { name: 'Audition', icon: 'audio', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    ],
  },
  {
    id: 'mc-host',
    label: 'MC / Host',
    tools: [
      { name: 'Public Speaking', icon: 'mic', color: 'text-orange-400', bg: 'bg-orange-400/10' },
      { name: 'Script Writing', icon: 'script', color: 'text-sky-400', bg: 'bg-sky-400/10' },
      { name: 'Stage Presence', icon: 'stage', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
      { name: 'Event Planning', icon: 'event', color: 'text-lime-400', bg: 'bg-lime-400/10' },
      { name: 'Audience', icon: 'audience', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    ],
  },
  {
    id: 'content-creation',
    label: 'Content Creation',
    tools: [
      { name: 'Storytelling', icon: 'story', color: 'text-violet-400', bg: 'bg-violet-400/10' },
      { name: 'Instagram', icon: 'instagram', color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'YouTube', icon: 'youtube', color: 'text-red-400', bg: 'bg-red-400/10' },
      { name: 'SEO & Hashtags', icon: 'seo', color: 'text-teal-400', bg: 'bg-teal-400/10' },
      { name: 'Analytics', icon: 'analytics', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    ],
  },
]

export const traits = [
  {
    icon: 'code',
    title: 'Clean Code',
    description: 'I write clean, efficient and scalable code following best practices.',
  },
  {
    icon: 'lightbulb',
    title: 'Creative Mindset',
    description: 'I love turning ideas into creative digital solutions and visual stories.',
  },
  {
    icon: 'mic',
    title: 'Confident Speaker',
    description: 'As an MC, I connect with audiences and deliver messages with impact.',
  },
  {
    icon: 'users',
    title: 'Team Player',
    description: 'I enjoy collaborating, sharing ideas and growing together.',
  },
]

export const skillGroups = [
  {
    title: 'Development',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'UI/UX Principles', level: 82 },
    ],
  },
  {
    title: 'Video & Media',
    skills: [
      { name: 'Premiere Pro', level: 90 },
      { name: 'After Effects', level: 78 },
      { name: 'Color Grading', level: 80 },
      { name: 'Sound Design', level: 70 },
    ],
  },
  {
    title: 'Hosting & Communication',
    skills: [
      { name: 'Stage Presentation', level: 95 },
      { name: 'Script Writing', level: 85 },
      { name: 'Public Speaking', level: 92 },
    ],
  },
]

export const projectCategories = [
  'All Projects',
  'Web Development',
  'Business Analysis',
  'Video Editing',
  'Content Creation',
  'Others',
] as const

export const projects = [
  {
    title: 'Dashboard Analytics',
    category: 'Web Development',
    badge: 'Web Development',
    description:
      'A responsive analytics dashboard with real-time data visualization, role-based access and interactive reports.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    thumbnail: 'dashboard',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    title: 'E-Commerce Website',
    category: 'Web Development',
    badge: 'Web Development',
    description: 'Modern e-commerce website with product filtering, cart, checkout and payment integration.',
    tags: ['Next.js', 'Redux Toolkit', 'Stripe', 'MongoDB'],
    thumbnail: 'ecommerce',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'E-Voting System (BA)',
    category: 'Business Analysis',
    badge: 'Business Analysis',
    description:
      'Business analysis, use case modeling, process flow and requirement documentation for e-voting system.',
    tags: ['UML', 'Use Case', 'Process Flow', 'SRS'],
    thumbnail: 'flowchart',
    accent: 'from-slate-300 to-slate-500',
  },
  {
    title: 'Cinematic Travel Video',
    category: 'Video Editing',
    badge: 'Video Editing',
    description: 'Edited a cinematic travel video with transitions, color grading, effects and storytelling.',
    tags: ['CapCut', 'Color Grading', 'Transitions', 'Audio Sync'],
    thumbnail: 'travel-video',
    accent: 'from-slate-700 to-slate-900',
  },
  {
    title: 'Social Media Content Series',
    category: 'Content Creation',
    badge: 'Content Creation',
    description: 'Planned, created and edited content for TikTok, YouTube Shorts and Instagram.',
    tags: ['CapCut', 'Script Writing', 'Content Strategy', 'SEO'],
    thumbnail: 'social-series',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Event Host / MC',
    category: 'Others',
    badge: 'MC / Host',
    description: 'Hosted various events, workshops and programs with confident communication and audience engagement.',
    tags: ['MC', 'Presentation', 'Communication', 'Public Speaking'],
    thumbnail: 'stage',
    accent: 'from-slate-800 to-black',
  },
]

export const projectStats = [
  { icon: 'code', value: '15+', label: 'Projects Completed' },
  { icon: 'clipboard', value: '5+', label: 'Domains Worked In' },
  { icon: 'users', value: '20K+', label: 'Users Impacted' },
  { icon: 'play-circle', value: '30+', label: 'Videos Edited' },
  { icon: 'calendar', value: '10+', label: 'Events Hosted' },
  { icon: 'trophy', value: '100%', label: 'Client Satisfaction' },
]

export const videos = [
  { title: 'Cinematic Travel Video', category: 'Edited in Premiere Pro', duration: '02:45', accent: 'from-slate-700 to-slate-900' },
  { title: 'Brand Promo Reel', category: 'Edited in After Effects', duration: '01:30', accent: 'from-violet-600 to-purple-800' },
  { title: 'Wedding Highlight', category: 'Edited in Premiere Pro', duration: '03:12', accent: 'from-rose-500 to-red-700' },
  { title: 'Product Launch Teaser', category: 'Motion Graphics', duration: '00:45', accent: 'from-cyan-500 to-blue-700' },
]

export const mcEvents = [
  { title: 'Event Host Highlight', category: 'MC / Host', duration: '03:12' },
  { title: 'Corporate Gala Night', category: 'MC / Host', duration: '04:20' },
  { title: 'Tech Conference Opening', category: 'MC / Host', duration: '02:05' },
]

export const blogPosts = [
  {
    title: 'How I Structure a React Portfolio',
    excerpt: 'A look at the component architecture and design decisions behind this very site.',
    date: 'Jul 2026',
    tag: 'Development',
  },
  {
    title: '5 Color Grading Tricks for Cinematic Footage',
    excerpt: 'Quick wins in Premiere Pro that instantly make travel footage feel more filmic.',
    date: 'Jun 2026',
    tag: 'Video Editing',
  },
  {
    title: 'What I Learned Hosting 30+ Live Events',
    excerpt: "Notes on stage presence, script writing, and keeping an audience's attention.",
    date: 'May 2026',
    tag: 'MC / Host',
  },
]
