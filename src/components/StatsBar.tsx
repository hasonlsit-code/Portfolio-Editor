import { Code2, Folder, PlayCircle, Mic, Users } from 'lucide-react'
import { stats } from '../data/content'
import Reveal from './Reveal'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  folder: Folder,
  'play-circle': PlayCircle,
  mic: Mic,
  users: Users,
}

export default function StatsBar() {
  return (
    <section className="px-6 sm:px-10 pb-16 relative z-10">
      <Reveal className="glass-panel rounded-3xl px-8 sm:px-12 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map((stat, i) => {
          const Icon = icons[stat.icon]
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <Icon size={28} className="text-[var(--text)] stroke-[1.5]" />
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] leading-none mb-1">{stat.value}</p>
                <p className="text-xs text-[var(--text-faint)] tracking-wide">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
