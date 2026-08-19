import { Lightbulb } from 'lucide-react'
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


      </div>
    </section>
  )
}
