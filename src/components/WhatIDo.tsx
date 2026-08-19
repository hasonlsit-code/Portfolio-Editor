import { Clapperboard, Aperture, Film, Mic } from 'lucide-react'
import { whatIDo } from '../data/content'
import Reveal from './Reveal'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  clapperboard: Clapperboard,
  aperture: Aperture,
  film: Film,
  mic: Mic,
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="px-6 sm:px-10 pb-8 relative z-10">
      <Reveal className="glass-panel rounded-3xl p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
          What I Do
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {whatIDo.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 80} className="group flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center text-[var(--text)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-[15px]">{item.title}</h3>
                <p className="text-sm text-[var(--text-faint)] leading-relaxed">{item.description}</p>
              </Reveal>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
