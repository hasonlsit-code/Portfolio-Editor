import { useEffect, useState } from 'react'
import { Play, Plus, Trash2, X } from 'lucide-react'
import { videos as staticVideos } from '../data/content'
import { supabase } from '../lib/supabase'
import Reveal from './Reveal'

interface DbVideo {
  id: string
  title: string
  video_url: string
  category: string
  duration: string | null
}

export default function Videos() {
  const [dbVideos, setDbVideos] = useState<DbVideo[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', video_url: '', category: '', duration: '' })
  const [saving, setSaving] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const getEmbedUrl = (url: string) => {
    if (!url) return ''
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, '/preview')
    }
    if (url.includes('youtube.com/watch?v=')) {
      try {
        const videoId = new URL(url).searchParams.get('v')
        return `https://www.youtube.com/embed/${videoId}`
      } catch { return url }
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url
  }

  const fetchVideos = async () => {
    if (!supabase) return
    const { data } = await supabase.from('videos').select('*').order('created_at', { ascending: false })
    if (data) setDbVideos(data as DbVideo[])
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) {
      alert("Bạn chưa cấu hình cơ sở dữ liệu Supabase! Vui lòng điền VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào file .env để lưu video.")
      return
    }
    setSaving(true)

    await supabase.from('videos').insert({
      title: form.title,
      video_url: form.video_url,
      category: form.category || 'Video',
      duration: form.duration || null,
    })
    setSaving(false)
    setShowForm(false)
    setForm({ title: '', video_url: '', category: '', duration: '' })
    fetchVideos()
  }

  const handleDelete = async (id: string) => {
    if (!supabase) {
      alert("Bạn chưa cấu hình cơ sở dữ liệu Supabase! Tính năng xóa đang bị vô hiệu hóa.")
      return
    }
    await supabase.from('videos').delete().eq('id', id)
    fetchVideos()
  }

  return (
    <section id="videos" className="px-6 sm:px-10 py-16 scroll-mt-6">
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-black/90 backdrop-blur-sm">
          <button 
            onClick={() => setPlayingVideo(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl animate-fade-up">
            <iframe
              src={getEmbedUrl(playingVideo)}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Reveal>
        <div className="flex items-center justify-between gap-4 mb-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
            Videos
          </p>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity"
          >
            {showForm ? <X size={13} /> : <Plus size={13} />}
            {showForm ? 'Hủy' : 'Thêm Video'}
          </button>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-10">
          Những thước phim tôi đã dựng
        </h2>
      </Reveal>

      {showForm && (
        <form
          onSubmit={handleAdd}
          className="grid sm:grid-cols-2 gap-3 mb-8 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
        >
          <input
            required
            placeholder="Link Video (Youtube hoặc Google Drive)"
            value={form.video_url}
            onChange={(e) => setForm({ ...form, video_url: e.target.value })}
            className="sm:col-span-2 px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none"
          />
          <input
            required
            placeholder="Tiêu đề"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none"
          />
          <input
            placeholder="Thể loại (VD: Dựng bằng Premiere)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none"
          />
          <input
            placeholder="Thời lượng (VD: 02:45)"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none"
          />
          <button
            type="submit"
            disabled={saving}
            className="sm:col-span-2 py-2.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {saving ? 'Đang lưu...' : 'Lưu Video'}
          </button>
        </form>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {staticVideos.map((video, i) => (
          <Reveal
            key={video.title}
            delay={i * 100}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`relative aspect-video bg-gradient-to-br ${video.accent} overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => {
                    // Static videos might not have video_url in content.ts, but if they do, we play them
                    if ((video as any).video_url) setPlayingVideo((video as any).video_url)
                    else alert('Video mẫu này chưa có link đính kèm!')
                  }}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Play size={20} className="text-white fill-white ml-0.5" />
                </button>
              </div>
              <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full pointer-events-none">
                {video.duration}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[var(--text)] mb-1">{video.title}</h3>
              <p className="text-xs text-[var(--text-faint)]">{video.category}</p>
            </div>
          </Reveal>
        ))}

        {dbVideos.map((video, i) => (
          <Reveal
            key={video.id}
            delay={(staticVideos.length + i) * 100}
            className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
          >
            <button
              onClick={() => handleDelete(video.id)}
              aria-label="Delete video"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white/80 hover:text-white flex items-center justify-center"
            >
              <Trash2 size={14} />
            </button>
            <button
              onClick={() => {
                if (video.video_url) setPlayingVideo(video.video_url)
              }}
              className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden w-full text-left"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={20} className="text-white fill-white ml-0.5" />
              </div>
              {video.duration && (
                <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
                  {video.duration}
                </span>
              )}
            </button>
            <div className="p-5">
              <h3 className="font-semibold text-[var(--text)] mb-1">{video.title}</h3>
              <p className="text-xs text-[var(--text-faint)]">{video.category}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
