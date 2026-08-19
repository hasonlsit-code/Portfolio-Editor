import { Quote } from 'lucide-react'
import { profile } from '../data/content'

export default function AboutQuote() {
  return (
    <div className="glass-card-dark rounded-3xl p-7 w-full sm:w-[260px] shrink-0">
      <Quote size={28} className="text-[var(--text-faint)] mb-4" fill="currentColor" strokeWidth={0} />
      <p className="text-[var(--text)] text-[15px] leading-relaxed mb-6">{profile.quote}</p>
      <p className="font-script text-2xl text-[var(--text)] leading-none">{profile.name}</p>
    </div>
  )
}
