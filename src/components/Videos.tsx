import { useEffect, useState } from 'react'
import { Play, Plus, Trash2, X } from 'lucide-react'
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
  const [form, setForm] = useState({ title: '', video_url: '', category: '', duration: '', orientation: 'vertical' })
  const [saving, setSaving] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<{url: string, orientation: 'vertical'|'horizontal'} | null>(null)

  const getEmbedUrl = (url: string) => {
    if (!url) return ''
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
      if (match) return `https://drive.google.com/file/d/${match[1]}/preview`
      const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/)
      if (idMatch) return `https://drive.google.com/file/d/${idMatch[1]}/preview`
      return url
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

  const getThumbnailUrl = (url: string) => {
    if (!url) return null
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
      if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`
      const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/)
      if (idMatch) return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w800`
      return null
    }
    if (url.includes('youtube.com/watch?v=')) {
      try {
        const videoId = new URL(url).searchParams.get('v')
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      } catch { return null }
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    return null
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
      category: `${form.category || 'Video'} #${form.orientation}`,
      duration: form.duration || null,
    })
    setSaving(false)
    setShowForm(false)
    setForm({ title: '', video_url: '', category: '', duration: '', orientation: 'vertical' })
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

  const verticalVideos = dbVideos.filter(v => !v.category.includes('#horizontal'))
  const horizontalVideos = dbVideos.filter(v => v.category.includes('#horizontal'))

  const cleanCategory = (cat: string) => cat.replace('#vertical', '').replace('#horizontal', '').trim()

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
          <div className={`relative ${playingVideo.orientation === 'horizontal' ? 'w-full max-w-5xl aspect-video' : 'h-[85vh] aspect-[9/16]'} rounded-2xl overflow-hidden bg-black shadow-2xl animate-fade-up`}>
            <iframe
              src={getEmbedUrl(playingVideo.url)}
              className="absolute inset-0 w-full h-full border-0"
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
          <div className="sm:col-span-2 flex items-center gap-4 px-1">
            <span className="text-sm font-semibold text-[var(--text)]">Định dạng:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="orientation" 
                checked={form.orientation === 'vertical'}
                onChange={() => setForm({ ...form, orientation: 'vertical' })}
                className="accent-[var(--text)]"
              />
              <span className="text-sm text-[var(--text-faint)]">Dọc (9:16)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="orientation" 
                checked={form.orientation === 'horizontal'}
                onChange={() => setForm({ ...form, orientation: 'horizontal' })}
                className="accent-[var(--text)]"
              />
              <span className="text-sm text-[var(--text-faint)]">Ngang (16:9)</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="sm:col-span-2 py-2.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {saving ? 'Đang lưu...' : 'Lưu Video'}
          </button>
        </form>
      )}

      {verticalVideos.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-indigo-500" />
            Video Dọc (Shorts, Reels)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {verticalVideos.map((video, i) => (
              <Reveal
                key={video.id}
                delay={i * 100}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
              >
                <button
                  onClick={() => handleDelete(video.id)}
                  aria-label="Delete video"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white/80 hover:text-white flex items-center justify-center"
                >
                  <Trash2 size={14} />
                </button>
                <button
                  onClick={() => {
                    if (video.video_url) setPlayingVideo({ url: video.video_url, orientation: 'vertical' })
                  }}
                  className="relative aspect-[9/16] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden w-full text-left"
                >
                  {getThumbnailUrl(video.video_url) && (
                    <img 
                      src={getThumbnailUrl(video.video_url)!} 
                      alt={video.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-black/60 transition-all">
                    <Play size={18} className="text-white fill-white ml-0.5" />
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-3 right-3 z-10 text-xs font-medium text-white/90 bg-black/50 backdrop-blur px-2 py-0.5 rounded-full">
                      {video.duration}
                    </span>
                  )}
                </button>
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-[var(--text)] mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-xs text-[var(--text-faint)] line-clamp-1">{cleanCategory(video.category)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {horizontalVideos.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-rose-500" />
            Video Ngang (Youtube, Phim)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {horizontalVideos.map((video, i) => (
              <Reveal
                key={video.id}
                delay={i * 100}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300"
              >
                <button
                  onClick={() => handleDelete(video.id)}
                  aria-label="Delete video"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white/80 hover:text-white flex items-center justify-center"
                >
                  <Trash2 size={14} />
                </button>
                <button
                  onClick={() => {
                    if (video.video_url) setPlayingVideo({ url: video.video_url, orientation: 'horizontal' })
                  }}
                  className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden w-full text-left"
                >
                  {getThumbnailUrl(video.video_url) && (
                    <img 
                      src={getThumbnailUrl(video.video_url)!} 
                      alt={video.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-black/60 transition-all">
                    <Play size={18} className="text-white fill-white ml-0.5" />
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-3 right-3 z-10 text-xs font-medium text-white/90 bg-black/50 backdrop-blur px-2 py-0.5 rounded-full">
                      {video.duration}
                    </span>
                  )}
                </button>
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-[var(--text)] mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-xs text-[var(--text-faint)] line-clamp-1">{cleanCategory(video.category)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
