import avt from '../assets/avt.png'
import { profile } from '../data/content'

export default function AboutPortrait() {
  return (
    <div
      className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 62% 38%, rgba(255,255,255,0.07), transparent 55%), var(--bg-elevated)',
      }}
    >
      {/* decorative ring */}
      <div className="absolute left-1/2 top-[38%] w-[78%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
      <div className="absolute left-1/2 top-[38%] w-[60%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <img
        src={avt}
        alt={profile.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: '62% 15%',
          maskImage: 'radial-gradient(ellipse 52% 62% at 62% 40%, black 55%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse 52% 62% at 62% 40%, black 55%, transparent 92%)',
        }}
      />
    </div>
  )
}
