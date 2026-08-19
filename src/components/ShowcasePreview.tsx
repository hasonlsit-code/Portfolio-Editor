import { useState } from 'react'
import { ArrowRight, Play, ChevronLeft, ChevronRight, Mic2 } from 'lucide-react'
import { projects, videos, mcEvents } from '../data/content'
import Reveal from './Reveal'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ProjectThumb({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-soft)] border border-[var(--border)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90 group-hover:scale-105 transition-transform duration-500`} />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

export default function ShowcasePreview() {
  const [mcIndex, setMcIndex] = useState(0)
  const featured = projects.slice(0, 3)
  const video = videos[0]
  const mc = mcEvents[mcIndex]

  return (
    <section className="px-6 sm:px-10 pb-8 relative z-10">
      <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-6">
        {/* Featured Projects */}
        <Reveal delay={0} className="glass-panel rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
              Featured Projects
            </p>
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              View All Projects
              <ArrowRight size={13} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {featured.map((p) => (
              <ProjectThumb key={p.title} project={p} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {featured.map((p) => (
              <div key={p.title}>
                <h4 className="text-sm font-semibold text-[var(--text)] truncate">{p.title}</h4>
                <p className="text-xs text-[var(--text-faint)] truncate">{p.category}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Video Editor */}
        <Reveal delay={100} className="glass-panel rounded-3xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
              Video Editor
            </p>
            <button
              onClick={() => scrollTo('videos')}
              className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              View All
              <ArrowRight size={13} />
            </button>
          </div>
          <div className={`relative flex-1 min-h-[140px] rounded-xl overflow-hidden bg-gradient-to-br ${video.accent} mb-4`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center hover:scale-105 transition-transform">
                <Play size={20} className="text-white fill-white ml-0.5" />
              </button>
            </div>
            <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
              {video.duration}
            </span>
          </div>
          <h4 className="font-semibold text-[var(--text)] text-sm">{video.title}</h4>
          <p className="text-xs text-[var(--text-faint)]">{video.category}</p>
        </Reveal>

        {/* MC / Host */}
        <Reveal delay={200} className="glass-panel rounded-3xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
              MC / Host
            </p>
            <button
              onClick={() => scrollTo('mc-host')}
              className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              View More
              <ArrowRight size={13} />
            </button>
          </div>
          <div className="relative flex-1 min-h-[140px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-black mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Mic2 size={26} className="text-white/80" />
              </div>
            </div>
            <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
              {mc.duration}
            </span>
            <button
              onClick={() => setMcIndex((i) => (i - 1 + mcEvents.length) % mcEvents.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setMcIndex((i) => (i + 1) % mcEvents.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <h4 className="font-semibold text-[var(--text)] text-sm">{mc.title}</h4>
          <p className="text-xs text-[var(--text-faint)]">{mc.category}</p>
        </Reveal>
      </div>
    </section>
  )
}
