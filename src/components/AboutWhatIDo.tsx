import { useState } from 'react'
import {
  Calendar,
  Clapperboard,
  Sparkles,
  Video,
  Palette,
  Volume2,
  Mic,
  BookOpen,
  SplitSquareHorizontal,
  Wand2,
  Music,
} from 'lucide-react'
import { whatIDoTabs } from '../data/content'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  premiere: Clapperboard,
  aftereffects: Sparkles,
  capcut: Video,
  davinci: Palette,
  color: Palette,
  palette: Palette,
  audio: Volume2,
  sound: Music,
  mic: Mic,
  story: BookOpen,
  transition: SplitSquareHorizontal,
  animation: Wand2,
}

export default function AboutWhatIDo() {
  const [activeTab, setActiveTab] = useState(whatIDoTabs[0].id)
  const active = whatIDoTabs.find((t) => t.id === activeTab) ?? whatIDoTabs[0]

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8">
      <h3 className="flex items-center gap-3 font-semibold text-lg text-[var(--text)] mb-2">
        <span className="w-9 h-9 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
          <Calendar size={16} />
        </span>
        Tôi Có Thể Làm Gì
      </h3>
      <p className="text-sm text-[var(--text-faint)] mb-6">
        Tôi kết hợp sự sáng tạo và kỹ thuật để kể những câu chuyện và tạo ra các video chất lượng cao.
      </p>

      <div className="flex flex-wrap gap-2 mb-7">
        {whatIDoTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-[var(--text)] text-[var(--bg)]'
                : 'bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-2">
        {active.tools.map((tool) => {
          const Icon = icons[tool.icon]
          return (
            <div key={tool.name} className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center`}>
                <Icon size={20} className={tool.color} />
              </div>
              <span className="text-[11px] text-[var(--text-muted)] text-center w-full truncate px-1">
                {tool.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
