import { Mic2 } from 'lucide-react'
import { mcEvents } from '../data/content'
import Reveal from './Reveal'

export default function MCHost() {
  return (
    <section id="mc-host" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <Reveal>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
          MC / Host
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-10">
          On stage, in the moment
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mcEvents.map((event, i) => (
          <Reveal
            key={event.title}
            delay={i * 100}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 via-slate-800 to-black overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Mic2 size={26} className="text-white/80" />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
                {event.duration}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[var(--text)] mb-1">{event.title}</h3>
              <p className="text-xs text-[var(--text-faint)]">{event.category}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
