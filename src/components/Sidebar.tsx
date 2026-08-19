import { useEffect, useState } from 'react'
import {
  Home,
  User,
  Box,
  Folder,
  PlayCircle,
  Mic,
  FileText,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from './SocialIcons'
import { navLinks, profile } from '../data/content'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  home: Home,
  user: User,
  box: Box,
  folder: Folder,
  play: PlayCircle,
  mic: Mic,
  file: FileText,
  mail: Mail,
}

export default function Sidebar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-5 py-4 bg-[var(--bg-elevated)]/90 backdrop-blur border-b border-[var(--border)]">
        <span className="font-display text-lg font-bold text-[var(--text)]">
          {profile.shortName}<span className="text-[var(--text-faint)]">.</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[var(--bg)]/98 backdrop-blur pt-20 px-6 animate-fade-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = icons[link.icon]
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                    active === link.id
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                      : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-[220px] shrink-0 h-screen sticky top-0 px-5 py-8 border-r border-[var(--border)] bg-[var(--bg-elevated)]">
        <div>
          <div className="font-display text-2xl font-bold mb-10 text-[var(--text)]">
            {profile.shortName}<span className="text-[var(--text-faint)]">.</span>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = icons[link.icon]
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-[1rem] text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-[var(--text)] text-[var(--bg)] shadow-[0_0_20px_rgba(255,255,255,0.1)] font-semibold'
                      : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-[var(--bg)]' : ''} />
                  <span className="text-[14px] tracking-wide">{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--bg)]" />}
                </button>
              )
            })}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--text)] mb-4">Let's Connect</p>
          <div id="social" className="flex items-center gap-3 mb-3">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
              <GithubIcon size={16} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
              <LinkedinIcon size={16} />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
              <InstagramIcon size={16} />
            </a>
            <a href={profile.social.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
              <YoutubeIcon size={16} />
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-6"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <p className="text-xs text-[var(--text-faint)] leading-relaxed mb-6">
            © 2026 {profile.name}
            <br />
            All rights reserved.
          </p>
        </div>
      </aside>
    </>
  )
}
