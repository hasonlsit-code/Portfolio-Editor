import { Clapperboard } from 'lucide-react'

export default function AboutPortrait() {
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Decorative Rings */}
      <div className="absolute w-[240px] h-[240px] rounded-full border border-[var(--border-strong)] border-dashed animate-[spin_40s_linear_infinite]" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-[var(--border)] animate-[spin_50s_linear_infinite_reverse]" />

      {/* Center 3D-like Icon */}
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-soft)] backdrop-blur-md rounded-3xl border border-[var(--border-strong)] flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer">
        <Clapperboard size={56} className="text-[var(--text)] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  )
}
