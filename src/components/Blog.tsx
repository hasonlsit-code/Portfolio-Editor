import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/content'
import Reveal from './Reveal'

export default function Blog() {
  return (
    <section id="blog" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <Reveal>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
          Blog
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-10">
          Notes &amp; thoughts
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <Reveal
            key={post.title}
            delay={i * 100}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 flex flex-col hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-soft)] text-[var(--text-muted)] w-fit mb-4">
              {post.tag}
            </span>
            <h3 className="font-semibold text-[var(--text)] mb-2 leading-snug">{post.title}</h3>
            <p className="text-sm text-[var(--text-faint)] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-[var(--text-faint)]">
              <span>{post.date}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
