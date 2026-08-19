import { Clapperboard, Aperture, Mic, Users, Zap } from 'lucide-react'
import { traits } from '../data/content'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  clapperboard: Clapperboard,
  aperture: Aperture,
  mic: Mic,
  users: Users,
  zap: Zap,
}

export default function AboutTraits() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {traits.map((trait) => {
          const Icon = icons[trait.icon]
          return (
            <div key={trait.title} className="flex flex-col gap-3">
              <Icon size={22} className="text-[var(--text)]" />
              <h4 className="font-semibold text-[var(--text)] text-[15px]">{trait.title}</h4>
              <p className="text-sm text-[var(--text-faint)] leading-relaxed">{trait.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
