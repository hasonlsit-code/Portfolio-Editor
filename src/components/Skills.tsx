import {
  ClipboardList,
  CodeXml,
  Lightbulb,
  MessageSquare,
  Brain,
  Users,
  Clock,
  Zap,
  Mic,
  PenTool,
  Send,
  LayoutGrid,
} from 'lucide-react'
import HeroPortrait from './HeroPortrait'
import { GithubIcon } from './SocialIcons'
import Reveal from './Reveal'

function CapCutIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 12c3-4.5 6-4.5 8 0s5 4.5 8 0" strokeLinecap="round" />
      <path d="M4 12c3 4.5 6 4.5 8 0s5-4.5 8 0" strokeLinecap="round" />
    </svg>
  )
}

const businessAnalysis = [
  { name: 'Requirement Elicitation', level: 90 },
  { name: 'Process Modeling (BPMN, Flowchart)', level: 85 },
  { name: 'Use Case & User Story', level: 90 },
  { name: 'Market & Competitor Analysis', level: 85 },
  { name: 'SQL & Data Analysis', level: 75 },
  { name: 'Documentation (BRD, SRS, FRD)', level: 90 },
]

const frontendDev = [
  { name: 'HTML / CSS / SCSS / Tailwind', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 75 },
  { name: 'UI/UX & Responsive Design', level: 90 },
  { name: 'State Management (Redux, Context)', level: 70 },
]

const videoEditor = [
  { name: 'Video Editing', level: 95 },
  { name: 'Transitions & Effects', level: 90 },
  { name: 'Color Grading', level: 85 },
  { name: 'Text & Animation', level: 90 },
  { name: 'Audio Sync & Sound Design', level: 85 },
  { name: 'Short-form (Reels, TikTok, Shorts)', level: 95 },
]

const contentCreator = [
  { name: 'Content Strategy', level: 90 },
  { name: 'Script Writing', level: 90 },
  { name: 'Storytelling', level: 85 },
  { name: 'Social Media (TikTok, YouTube, IG)', level: 90 },
  { name: 'SEO & Hashtag Research', level: 80 },
  { name: 'Engagement & Community', level: 85 },
]

const softSkills = [
  { icon: MessageSquare, name: 'Communication', level: 90 },
  { icon: Brain, name: 'Problem Solving', level: 90 },
  { icon: Users, name: 'Teamwork', level: 90 },
  { icon: Clock, name: 'Time Management', level: 85 },
  { icon: Zap, name: 'Adaptability', level: 85 },
  { icon: Mic, name: 'Presentation', level: 90 },
]

const tools: {
  name: string
  bg: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  letter?: string
}[] = [
  { name: 'Figma', icon: PenTool, bg: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600' },
  { name: 'VS Code', icon: CodeXml, bg: 'bg-blue-600' },
  { name: 'Git / GitHub', icon: GithubIcon, bg: 'bg-neutral-800 border border-white/10' },
  { name: 'Notion', letter: 'N', bg: 'bg-neutral-900 border border-white/10' },
  { name: 'Postman', icon: Send, bg: 'bg-orange-500' },
  { name: 'Trello', icon: LayoutGrid, bg: 'bg-blue-500' },
  { name: 'Excel', letter: 'X', bg: 'bg-green-600' },
  { name: 'PowerPoint', letter: 'P', bg: 'bg-orange-600' },
  { name: 'Canva', letter: 'C', bg: 'bg-gradient-to-br from-cyan-400 to-purple-500' },
  { name: 'CapCut', icon: CapCutIcon, bg: 'bg-neutral-900 border border-white/10' },
]

const ProgressBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[13px] font-medium text-[var(--text-muted)]">{name}</span>
      <span className="text-[13px] font-medium text-[var(--text)]">{level}%</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-[var(--border-strong)] overflow-hidden">
      <div
        className="h-full rounded-full bg-[var(--text)]"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 py-20 scroll-mt-6 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-40 pointer-events-none mix-blend-screen mask-image-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
         <HeroPortrait />
      </div>
      
      <Reveal className="relative z-10 max-w-3xl mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6">
          WHAT I CAN DO <span className="ml-4 w-12 h-px bg-[var(--border-strong)] inline-block align-middle" />
        </p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6 tracking-tight leading-tight">
          Skills That Bring Ideas<br />to <span className="font-script text-sparkle">Life.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
          A diverse skill set built through hands-on experience in business analysis, frontend development, video editing and content creation.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 relative z-10">
        
        {/* Box 1: Business Analyst */}
        <Reveal delay={0} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <ClipboardList size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">01</span> Business Analyst</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Analyze business needs, design solutions and bridge the gap between business goals and technology.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {businessAnalysis.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 2: Frontend Development */}
        <Reveal delay={100} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <CodeXml size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">02</span> Frontend Development</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Build modern, responsive and user-friendly web interfaces with clean code and great user experience.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {frontendDev.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 3: Video Editor */}
        <Reveal delay={200} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <CapCutIcon size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">03</span> Video Editor (CapCut)</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Create engaging short-form and long-form videos optimized for multiple platforms using CapCut.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {videoEditor.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 4: Content Creator */}
        <Reveal delay={300} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <Lightbulb size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">04</span> Content Creator</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Develop ideas, create content and deliver value through videos, posts and stories.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {contentCreator.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 5: Tools & Technologies */}
        <Reveal delay={400} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-lg text-[var(--text)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]"></span>
              Tools & Technologies
            </h3>
            <button className="px-3 py-1.5 text-[11px] font-semibold tracking-wide border border-[var(--border-strong)] rounded-lg hover:bg-[var(--bg-soft)] transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-y-6 gap-x-2 mt-auto">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <div key={tool.name} className="group flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-2xl ${tool.bg} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}>
                    {Icon ? <Icon size={20} className="text-white" /> : (
                      <span className="text-white font-bold text-base">{tool.letter}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-[var(--text-muted)] text-center w-full truncate px-1">
                    {tool.name}
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Box 6: Soft Skills */}
        <Reveal delay={500} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]"></span>
            <h3 className="font-semibold text-lg text-[var(--text)]">Soft Skills</h3>
          </div>
          
          <div className="flex flex-col justify-between h-full gap-4">
            {softSkills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="flex items-center gap-4">
                  <Icon size={16} className="text-[var(--text-muted)] shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-medium text-[var(--text-muted)]">{skill.name}</span>
                      <span className="text-[13px] font-medium text-[var(--text)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[var(--border-strong)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--text)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
