import {
  Calendar,
  Video,
  Palette,
  BookOpen,
  Camera,
} from 'lucide-react'
import { coreTools } from '../data/content'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  video: Video,
  palette: Palette,
  book: BookOpen,
  camera: Camera,
}

export default function AboutWhatIDo() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col h-full">
      <h3 className="flex items-center gap-3 font-semibold text-lg text-[var(--text)] mb-2">
        <span className="w-9 h-9 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
          <Calendar size={16} />
        </span>
        Quy Trình & Công Cụ
      </h3>
      <p className="text-sm text-[var(--text-faint)] mb-8">
        Tôi kết hợp công nghệ hiện đại và kỹ năng cá nhân để đưa mọi ý tưởng thành hiện thực.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-auto">
        {coreTools.map((tool) => {
          const Icon = icons[tool.icon]
          return (
            <div key={tool.name} className="flex flex-col gap-3 p-4 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${tool.bg} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className={tool.color} />
                </div>
                <h4 className="font-semibold text-[var(--text)] text-[14px]">{tool.name}</h4>
              </div>
              <p className="text-xs text-[var(--text-faint)] leading-relaxed">
                {tool.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
