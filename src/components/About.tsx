import { profile, stats } from '../data/content'
import AboutPortrait from './AboutPortrait'
import AboutQuote from './AboutQuote'
import AboutJourney from './AboutJourney'
import AboutWhatIDo from './AboutWhatIDo'
import AboutTraits from './AboutTraits'
import Reveal from './Reveal'

export default function About() {
  const heroStats = stats.slice(0, 4)

  return (
    <section id="about" className="px-6 sm:px-10 py-16 lg:pt-10 scroll-mt-6">
      <Reveal>
        <p className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] mb-8">
          Về Tôi
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center mb-14">
        <Reveal>
            <p className="flex items-center gap-3 text-[var(--text-muted)] text-sm font-medium mb-4">
            Tìm hiểu về tôi
            <span className="w-10 h-px bg-[var(--border-strong)]" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-[1.15] tracking-tight">
            Tôi biến ý tưởng thành
            <br />
            những{' '}
            <span
              className="font-script italic"
              style={{ textDecorationLine: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: '8px', textDecorationColor: 'var(--text-faint)' }}
            >
              trải nghiệm thực tế.
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-md mb-10">
            {profile.aboutIntro}
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {heroStats.map((s, i) => (
              <div key={s.label} className="transition-transform duration-300 hover:-translate-y-1" style={{ transitionDelay: `${i * 40}ms` }}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-[var(--text)] leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-[var(--text-faint)]">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 w-full">
            <AboutPortrait />
          </div>
          <AboutQuote />
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <AboutJourney />
        </Reveal>
        <Reveal delay={150} className="flex flex-col gap-6">
          <AboutWhatIDo />
          <AboutTraits />
        </Reveal>
      </div>
    </section>
  )
}
