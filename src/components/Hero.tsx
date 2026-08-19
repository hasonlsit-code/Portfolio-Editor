import { ArrowRight, Send } from 'lucide-react'
import { profile } from '../data/content'
import avt from '../assets/avt.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden lg:min-h-[620px] pb-16">
      {/* Full-bleed portrait, desktop only */}
      <div className="hidden lg:block absolute inset-y-0 right-[5%] w-[65%]">
        <img
          src={avt}
          alt={profile.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '35% 15%', filter: 'brightness(0.65) contrast(1.1) saturate(0.8)' }}
        />
        {/* Stronger gradients to completely blend the hard edges */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      </div>

      {/* Hero text */}
      <div className="relative z-20 px-6 sm:px-10 pt-8 lg:pt-10 max-w-xl animate-fade-up">
        <p className="text-[var(--text-muted)] text-lg mb-2 font-medium">{profile.greeting}</p>
        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {profile.name}
        </h1>
        <p className="font-display text-2xl sm:text-3xl font-semibold mb-6 text-shimmer">
          {profile.roles.map((role, i) => {
            const isMuted = i > 0 && i < profile.roles.length - 1
            return (
              <span key={role} className={isMuted ? 'opacity-70' : ''}>
                {role}
                {i < profile.roles.length - 1 ? '. ' : '.'}
              </span>
            )
          })}
        </p>
        <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-lg mb-10">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold hover:scale-105 transition-transform"
          >
            Xem Tác Phẩm
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-semibold hover:bg-[var(--bg-soft)] transition-colors"
          >
            Liên Hệ
            <Send size={15} />
          </button>
        </div>

        <button
          onClick={() => document.getElementById('what-i-do')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden lg:flex items-center gap-3 mt-12 text-sm text-[var(--text-faint)] hover:text-[var(--text)] transition-colors group"
        >
          <span className="flex flex-col items-center gap-1.5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="w-px h-8 bg-[var(--border-strong)] group-hover:bg-current transition-colors" />
          </span>
          Cuộn Xuống
        </button>
      </div>

      {/* Mobile portrait */}
      <div className="lg:hidden px-6 sm:px-10 mt-8">
        <div className="relative w-full h-80 rounded-3xl overflow-hidden">
          <img
            src={avt}
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '60% 15%' }}
          />
        </div>
      </div>

      {/* About Me card — floats over the image on desktop, stacks on mobile */}
      <div className="lg:hidden px-6 sm:px-10 mt-6">
        <div className="glass-panel rounded-3xl p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--text)] mb-3">Về Tôi</p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{profile.aboutShort}</p>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] hover:text-[var(--text-muted)] transition-colors"
          >
            Đọc Thêm
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
      <div className="hidden lg:block absolute z-30 bottom-16 right-[10%] w-[300px] p-7 rounded-3xl glass-panel shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text)] mb-3">Về Tôi</p>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">{profile.aboutShort}</p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] hover:text-[var(--text-muted)] transition-colors"
        >
          Đọc Thêm
          <ArrowRight size={13} />
        </button>
      </div>
    </section>
  )
}
