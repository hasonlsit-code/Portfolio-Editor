import { Play, Scissors, Film, MonitorPlay, Video } from 'lucide-react'

export default function AboutPortrait() {
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-[20%] left-[20%] animate-float opacity-30">
        <MonitorPlay size={48} strokeWidth={1} className="text-[var(--text)]" />
      </div>
      <div className="absolute bottom-[30%] right-[20%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Scissors size={64} strokeWidth={1} className="text-[var(--text)]" />
      </div>
      <div className="absolute top-[40%] right-[30%] animate-float opacity-40" style={{ animationDelay: '2s' }}>
        <Film size={40} strokeWidth={1} className="text-[var(--text)]" />
      </div>
      <div className="absolute bottom-[20%] left-[30%] animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <Video size={56} strokeWidth={1} className="text-[var(--text)]" />
      </div>
      
      {/* Central Clean Element */}
      <div className="relative z-10 flex flex-col items-center">
        <Play size={80} strokeWidth={0.5} className="text-[var(--text)] mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[var(--text-faint)] to-transparent opacity-50" />
      </div>
    </div>
  )
}
