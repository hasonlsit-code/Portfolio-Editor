import { Flag, ArrowRight } from 'lucide-react'
import { journey, profile } from '../data/content'

export default function AboutJourney() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="flex items-center gap-3 font-semibold text-lg text-[var(--text)]">
          <span className="w-9 h-9 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
            <Flag size={16} />
          </span>
          My Journey
        </h3>
        <a
          href={profile.cvUrl}
          download
          className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors shrink-0"
        >
          View Full Resume
          <ArrowRight size={13} />
        </a>
      </div>

      <div className="flex flex-col">
        {journey.map((item, i) => {
          const isLast = i === journey.length - 1
          const isCurrent = item.year === 'Now'
          return (
            <div key={item.year} className="relative pl-10 pb-8 last:pb-0">
              {!isLast && (
                <span className="absolute left-[7px] top-3 bottom-0 border-l-2 border-dashed border-[var(--border-strong)]" />
              )}
              <span
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center ${
                  isCurrent ? 'bg-[var(--text)] border-[var(--text)]' : 'border-[var(--border-strong)] bg-[var(--bg-elevated)]'
                }`}
              >
                {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[var(--bg)]" />}
              </span>
              <span
                className={`inline-block mb-2 px-2.5 py-1 rounded-md text-xs font-semibold ${
                  isCurrent ? 'bg-[var(--text)] text-[var(--bg)]' : 'bg-[var(--bg-soft)] text-[var(--text-muted)]'
                }`}
              >
                {item.year}
              </span>
              <h4 className="font-semibold text-[var(--text)] mb-1">{item.title}</h4>
              <p className="text-sm text-[var(--text-faint)] leading-relaxed">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
