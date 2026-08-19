import { Headphones, Mic2, Star } from 'lucide-react'
import avt from '../assets/avt.png'

function DashboardMockup() {
  const bars = [40, 65, 35, 80, 55, 90, 60, 45]
  const points = bars.map((h, i) => `${(i / (bars.length - 1)) * 100},${100 - h * 0.7}`).join(' ')
  return (
    <div className="absolute inset-0 bg-[#0c0c12] flex transition-transform duration-500 group-hover:scale-105">
      <div className="w-1/4 h-full border-r border-white/5 py-4 px-2.5 flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <div className="h-1.5 w-10 rounded bg-white/15" />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-full h-1.5 rounded ${i === 1 ? 'bg-violet-400/50' : 'bg-white/5'}`} />
        ))}
      </div>
      <div className="flex-1 p-5 flex flex-col justify-end relative">
        <div className="absolute top-4 right-4 flex items-center gap-1 text-[9px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          +24%
        </div>
        <div className="relative flex items-end gap-2 h-24">
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polyline points={points} fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          </svg>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-violet-400 opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="h-px w-full bg-white/10 mt-3" />
      </div>
    </div>
  )
}

function EcommerceMockup() {
  return (
    <div className="absolute inset-0 bg-[#0c0c12] flex flex-col transition-transform duration-500 group-hover:scale-105">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2 h-2 w-24 rounded-full bg-white/10" />
      </div>
      <div className="flex-1 flex items-center justify-between px-6">
        <div>
          <p className="text-white font-display font-bold text-lg leading-tight">
            Discover
            <br />
            Premium Products
          </p>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={9} className="text-amber-400" fill="currentColor" />
            ))}
          </div>
          <div className="mt-3 h-2 w-16 rounded-full bg-white/20" />
        </div>
        <div className="relative w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Headphones size={32} className="text-white/70" />
          <span className="absolute -top-1.5 -right-1.5 text-[8px] font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded-full">
            -30%
          </span>
        </div>
      </div>
      <div className="flex gap-2 px-6 pb-4">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="w-6 h-6 rounded-full bg-white/10 border border-white/10" />
        ))}
      </div>
    </div>
  )
}

function FlowchartMockup() {
  return (
    <div className="absolute inset-0 bg-[#eef0f4] flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
      <svg viewBox="0 0 300 160" className="w-full h-full">
        <defs>
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#334155" floodOpacity="0.15" />
          </filter>
        </defs>
        <line x1="40" y1="30" x2="140" y2="30" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="140" y1="30" x2="140" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="140" y1="80" x2="260" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="140" y1="80" x2="140" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="140" y1="130" x2="230" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
        <g filter="url(#soft-shadow)">
          <rect x="4" y="14" width="72" height="32" rx="6" fill="#c7d2fe" />
          <rect x="140" y="14" width="72" height="32" rx="6" fill="#a5b4fc" />
          <rect x="224" y="64" width="72" height="32" rx="6" fill="#6ee7b7" />
          <rect x="76" y="64" width="64" height="32" rx="6" fill="#fde68a" />
          <rect x="184" y="114" width="72" height="32" rx="6" fill="#fca5a5" />
        </g>
        <circle cx="40" cy="30" r="3" fill="#6366f1" />
        <circle cx="260" cy="80" r="3" fill="#10b981" />
        <circle cx="230" cy="130" r="3" fill="#f43f5e" />
      </svg>
    </div>
  )
}

function TravelVideoMockup() {
  const clips = ['bg-blue-500', 'bg-cyan-400', 'bg-emerald-400', 'bg-amber-400', 'bg-pink-400', 'bg-violet-400']
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between overflow-hidden transition-transform duration-500 group-hover:scale-105"
      style={{ background: 'linear-gradient(180deg, #7fa3c9 0%, #a8bfd4 30%, #c9b896 55%, #8a7560 100%)' }}
    >
      <div className="absolute w-16 h-16 rounded-full bg-amber-100/80 blur-md top-4 right-8" />
      <svg className="absolute inset-x-0 bottom-6 w-full h-2/3" viewBox="0 0 300 120" preserveAspectRatio="none">
        <polygon points="0,120 0,70 60,20 110,55 160,10 210,60 260,30 300,70 300,120" fill="#5b6f8c" opacity="0.55" />
        <polygon points="0,120 0,90 80,45 150,75 220,40 300,85 300,120" fill="#3d4c63" opacity="0.75" />
      </svg>
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <p className="font-display text-white text-2xl sm:text-3xl font-extrabold tracking-wide text-center drop-shadow-lg">
          ADVENTURE
          <br />
          AWAITS
        </p>
      </div>
      <div className="flex gap-0.5 h-6 shrink-0 relative z-10">
        {clips.map((c, i) => (
          <span key={i} className={`flex-1 ${c} opacity-80`} />
        ))}
      </div>
    </div>
  )
}

function SocialSeriesMockup() {
  const posters = [
    { text: '5 TIPS\nQUẢN LÝ\nTHỜI GIAN', bg: 'from-rose-500 to-orange-500', lift: false },
    { text: 'Productivity\nHACKS', bg: 'from-slate-700 to-slate-900', lift: true },
    { text: 'FOCUS\nCREATE\nSUCCESS', bg: 'from-indigo-600 to-purple-700', lift: false },
  ]
  return (
    <div className="absolute inset-0 bg-[#0c0c12] flex items-center justify-center gap-2 p-4 transition-transform duration-500 group-hover:scale-105">
      {posters.map((p, i) => (
        <div
          key={i}
          className={`flex-1 h-[85%] max-w-[33%] rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center p-2 shadow-lg ${
            p.lift ? 'h-full' : ''
          }`}
        >
          <p className="text-white text-[10px] sm:text-xs font-bold text-center leading-tight whitespace-pre-line">
            {p.text}
          </p>
        </div>
      ))}
    </div>
  )
}

function StageMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden transition-transform duration-500 group-hover:scale-105">
      <img
        src={avt}
        alt="On stage"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '55% 20%', filter: 'brightness(0.4) contrast(1.15) saturate(0.7)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
      <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-3xl top-0 left-1/4" />
      <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-3xl top-0 right-1/4" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
          <Mic2 size={26} className="text-white/90" />
        </div>
      </div>
    </div>
  )
}

const mockups: Record<string, React.ComponentType> = {
  dashboard: DashboardMockup,
  ecommerce: EcommerceMockup,
  flowchart: FlowchartMockup,
  'travel-video': TravelVideoMockup,
  'social-series': SocialSeriesMockup,
  stage: StageMockup,
}

export default function ProjectThumbnail({ type }: { type: string }) {
  const Mockup = mockups[type] ?? StageMockup
  return <Mockup />
}
