import { useState } from 'react'
import {
  ExternalLink,
  ChevronDown,
  LayoutGrid,
  List,
  Code2,
  ClipboardList,
  Users,
  PlayCircle,
  Calendar,
  Trophy,
} from 'lucide-react'
import { projects, projectCategories, projectStats } from '../data/content'
import ProjectThumbnail from './ProjectThumbnail'
import Reveal from './Reveal'

const statIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  clipboard: ClipboardList,
  users: Users,
  'play-circle': PlayCircle,
  calendar: Calendar,
  trophy: Trophy,
}

const sortOptions = ['Newest', 'Oldest', 'A-Z'] as const
type SortOption = (typeof sortOptions)[number]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects')
  const [sortBy, setSortBy] = useState<SortOption>('Newest')
  const [sortOpen, setSortOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filtered = projects.filter((p) => activeCategory === 'All Projects' || p.category === activeCategory)
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'A-Z') return a.title.localeCompare(b.title)
    if (sortBy === 'Oldest') return filtered.indexOf(b) - filtered.indexOf(a)
    return 0
  })

  return (
    <section id="projects" className="px-6 sm:px-10 py-16 lg:pt-10 scroll-mt-6">
      <Reveal>
        <p className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
          Projects
        </p>

        <p className="flex items-center gap-3 text-[var(--text-muted)] text-xs font-semibold uppercase tracking-widest mb-4">
          Things I've Built
          <span className="w-10 h-px bg-[var(--border-strong)]" />
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-tight tracking-tight">
          Projects That <span className="font-script italic">Make Impact.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mb-10">
          A collection of selected projects where I contributed to solving problems, delivering value and creating
          meaningful experiences.
        </p>
      </Reveal>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[var(--text)] text-[var(--bg)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel text-sm font-medium text-[var(--text)]"
            >
              {sortBy}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl glass-card-dark overflow-hidden z-10">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortBy(opt)
                      setSortOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      sortBy === opt ? 'text-[var(--text)] font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 p-1 rounded-full glass-panel">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-[var(--text)] text-[var(--bg)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-[var(--text)] text-[var(--bg)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectThumbnail type={project.thumbnail} />
                <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-xs font-semibold bg-black/50 backdrop-blur text-white">
                  {project.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-[var(--text)]">{project.title}</h3>
                  <button
                    aria-label={`Open ${project.title}`}
                    className="w-8 h-8 shrink-0 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)] transition-colors"
                  >
                    <ExternalLink size={13} />
                  </button>
                </div>
                <p className="text-sm text-[var(--text-faint)] leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sorted.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 60}
              className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden p-4 hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <div className="relative w-full sm:w-56 aspect-[16/10] sm:aspect-auto shrink-0 rounded-xl overflow-hidden">
                <ProjectThumbnail type={project.thumbnail} />
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-black/50 backdrop-blur text-white">
                  {project.badge}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center py-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-[var(--text)]">{project.title}</h3>
                  <button
                    aria-label={`Open ${project.title}`}
                    className="w-8 h-8 shrink-0 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)] transition-colors"
                  >
                    <ExternalLink size={13} />
                  </button>
                </div>
                <p className="text-sm text-[var(--text-faint)] leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {sorted.length === 0 && (
        <p className="text-center text-[var(--text-faint)] py-16">No projects in this category yet.</p>
      )}

      <Reveal className="mt-10 glass-panel rounded-3xl px-6 sm:px-10 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {projectStats.map((stat) => {
          const Icon = statIcons[stat.icon]
          return (
            <div key={stat.label} className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center text-[var(--text)] shrink-0">
                <Icon size={17} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-[var(--text)] leading-none">{stat.value}</p>
                <p className="text-xs text-[var(--text-faint)] mt-1">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
