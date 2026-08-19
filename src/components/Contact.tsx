import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from './SocialIcons'
import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {

  return (
    <section id="contact" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <Reveal>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-10">
          Let's work together
        </h2>
      </Reveal>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <Reveal className="flex flex-col gap-4">
          <div className="flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[var(--text-faint)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-faint)] uppercase tracking-wider font-semibold mb-1">Email</p>
              <p className="text-base font-medium text-[var(--text)]">{profile.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <Phone size={20} className="text-[var(--text-faint)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-faint)] uppercase tracking-wider font-semibold mb-1">Phone</p>
              <p className="text-base font-medium text-[var(--text)]">{profile.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-soft)] flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[var(--text-faint)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-faint)] uppercase tracking-wider font-semibold mb-1">Location</p>
              <p className="text-base font-medium text-[var(--text)]">{profile.location}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 pt-6">
            <a href={profile.social.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:-translate-y-1 transition-all">
              <FacebookIcon size={20} />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:-translate-y-1 transition-all">
              <InstagramIcon size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
