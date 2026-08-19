import avt from '../assets/avt.png'

export default function HeroPortrait() {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden group">
      <img 
        src={avt} 
        alt="Portrait" 
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
        style={{ filter: 'brightness(0.7) contrast(1.1) saturate(0.8)' }}
      />
      {/* Dark gradient overlays to blend seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] via-transparent to-transparent opacity-80" />
      
      {/* Light glow behind for premium feel */}
      <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
    </div>
  )
}

