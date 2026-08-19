import {
  Lightbulb,
  MessageSquare,
  Brain,
  Users,
  Clock,
  Zap,
  Mic,
} from 'lucide-react'
import HeroPortrait from './HeroPortrait'
import Reveal from './Reveal'

function CapCutIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 12c3-4.5 6-4.5 8 0s5 4.5 8 0" strokeLinecap="round" />
      <path d="M4 12c3 4.5 6 4.5 8 0s5-4.5 8 0" strokeLinecap="round" />
    </svg>
  )
}

const videoEditor = [
  { name: 'Dựng Video (Video Editing)', level: 95 },
  { name: 'Chuyển cảnh & Hiệu ứng', level: 90 },
  { name: 'Chỉnh màu (Color Grading)', level: 85 },
  { name: 'Hoạt ảnh chữ (Text & Animation)', level: 90 },
  { name: 'Thiết kế âm thanh (Sound Design)', level: 85 },
  { name: 'Video ngắn (Reels, TikTok, Shorts)', level: 95 },
]

const contentCreator = [
  { name: 'Chiến lược nội dung', level: 90 },
  { name: 'Viết kịch bản', level: 90 },
  { name: 'Kể chuyện (Storytelling)', level: 85 },
  { name: 'Mạng xã hội (TikTok, YouTube)', level: 90 },
  { name: 'Nghiên cứu xu hướng & Hashtag', level: 80 },
  { name: 'Tương tác cộng đồng', level: 85 },
]

const softSkills = [
  { icon: MessageSquare, name: 'Giao tiếp (Communication)', level: 90 },
  { icon: Brain, name: 'Giải quyết vấn đề (Problem Solving)', level: 90 },
  { icon: Users, name: 'Làm việc nhóm (Teamwork)', level: 90 },
  { icon: Clock, name: 'Quản lý thời gian (Time Management)', level: 85 },
  { icon: Zap, name: 'Khả năng thích ứng (Adaptability)', level: 85 },
  { icon: Mic, name: 'Thuyết trình (Presentation)', level: 90 },
]

const tools: {
  name: string
  bg: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  letter?: string
}[] = [
  { name: 'Premiere Pro', letter: 'Pr', bg: 'bg-[#9999FF]' },
  { name: 'After Effects', letter: 'Ae', bg: 'bg-[#9999FF]' },
  { name: 'DaVinci', letter: 'Da', bg: 'bg-gradient-to-br from-gray-700 to-gray-900' },
  { name: 'CapCut', icon: CapCutIcon, bg: 'bg-neutral-900 border border-white/10' },
  { name: 'Audition', letter: 'Au', bg: 'bg-[#00E676]' },
  { name: 'Photoshop', letter: 'Ps', bg: 'bg-[#31A8FF]' },
  { name: 'Illustrator', letter: 'Ai', bg: 'bg-[#FF9A00]' },
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
          TÔI CÓ THỂ LÀM GÌ <span className="ml-4 w-12 h-px bg-[var(--border-strong)] inline-block align-middle" />
        </p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text)] mb-6 tracking-tight leading-tight">
          Kỹ năng mang ý tưởng<br />vào <span className="font-script text-sparkle">Cuộc sống.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
          Bộ kỹ năng đa dạng được xây dựng thông qua kinh nghiệm thực tế trong việc dựng video, chỉnh màu, thiết kế âm thanh và sáng tạo nội dung.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 relative z-10">

        {/* Box 3: Video Editor */}
        <Reveal delay={0} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <CapCutIcon size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">01</span> Video Editor</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Dựng video từ định dạng ngắn đến dài, tối ưu cho nhiều nền tảng với CapCut và Premiere.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {videoEditor.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 4: Content Creator */}
        <Reveal delay={100} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <Lightbulb size={20} className="text-[var(--text)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)] mb-2"><span className="text-[var(--text-faint)] font-normal mr-2">02</span> Sáng tạo nội dung</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                Phát triển ý tưởng, tạo nội dung và mang lại giá trị qua video, bài đăng và câu chuyện.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6">
            {contentCreator.map(skill => <ProgressBar key={skill.name} {...skill} />)}
          </div>
        </Reveal>

        {/* Box 5: Tools & Technologies */}
        <Reveal delay={200} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-lg text-[var(--text)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]"></span>
              Công cụ & Phần mềm
            </h3>
            <button className="px-3 py-1.5 text-[11px] font-semibold tracking-wide border border-[var(--border-strong)] rounded-lg hover:bg-[var(--bg-soft)] transition-colors">
              Xem Tất Cả
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
        <Reveal delay={300} className="glass-panel rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]"></span>
            <h3 className="font-semibold text-lg text-[var(--text)]">Kỹ năng Mềm</h3>
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
