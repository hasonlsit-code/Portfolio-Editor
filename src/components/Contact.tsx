import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from './SocialIcons'
import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

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

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <Reveal className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <Mail size={18} className="text-[var(--text-faint)]" />
            <div>
              <p className="text-xs text-[var(--text-faint)]">Email</p>
              <p className="text-sm font-medium text-[var(--text)]">{profile.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <Phone size={18} className="text-[var(--text-faint)]" />
            <div>
              <p className="text-xs text-[var(--text-faint)]">Phone</p>
              <p className="text-sm font-medium text-[var(--text)]">{profile.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] transition-transform duration-300 hover:-translate-y-1">
            <MapPin size={18} className="text-[var(--text-faint)]" />
            <div>
              <p className="text-xs text-[var(--text-faint)]">Location</p>
              <p className="text-sm font-medium text-[var(--text)]">{profile.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <a href={profile.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:-translate-y-1 transition-all">
              <FacebookIcon size={16} />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:-translate-y-1 transition-all">
              <InstagramIcon size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8 flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-[var(--text-faint)]">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none focus:border-[var(--border-strong)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-[var(--text-faint)]">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none focus:border-[var(--border-strong)] transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-[var(--text-faint)]">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none focus:border-[var(--border-strong)] transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="self-start flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold hover:opacity-90 hover:scale-105 transition-all"
          >
            Send Message
            <Send size={15} />
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  )
}
