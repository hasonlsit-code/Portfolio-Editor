import { useEffect, useState } from 'react'
import { Play, Plus, Trash2, X } from 'lucide-react'
import { videos as staticVideos } from '../data/content'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import Reveal from './Reveal'

interface DbVideo {
  id: string
  title: string
  video_url: string
  category: string
  duration: string | null
}

export default function Videos() {
  const { isAdmin } = useAuth()
  const [dbVideos, setDbVideos] = useState<DbVideo[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', video_url: '', category: '', duration: '' })
  const [saving, setSaving] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const fetchVideos = async () => {
    if (!supabase) return
    const { data } = await supabase.from('videos').select('*').order('created_at', { ascending: false })
    if (data) setDbVideos(data as DbVideo[])
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      
      // Auto-fill title from filename
      const fileNameWithoutExt = selectedFile.name.replace(/\.[^/.]+$/, "")
      const title = fileNameWithoutExt
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      setForm(prev => ({ ...prev, title: prev.title || title }))
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) return
    setSaving(true)

    let finalVideoUrl = form.video_url

    if (file) {
      setUploading(true)
      try {
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        
        if (!cloudName || !uploadPreset) {
          alert("Cloudinary credentials are not configured in .env")
          setUploading(false)
          setSaving(false)
          return
        }

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', uploadPreset)

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
          method: 'POST',
          body: formData,
        })
        const data = await res.json()
        if (data.secure_url) {
          finalVideoUrl = data.secure_url
        } else {
          console.error("Cloudinary upload failed", data)
          alert("Failed to upload video to Cloudinary.")
          setUploading(false)
          setSaving(false)
          return
        }
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error)
        alert("Error uploading video.")
        setUploading(false)
        setSaving(false)
        return
      }
      setUploading(false)
    }

    await supabase.from('videos').insert({
      title: form.title,
      video_url: finalVideoUrl,
      category: form.category || 'Video',
      duration: form.duration || null,
    })
    setSaving(false)
    setShowForm(false)
    setFile(null)
    setForm({ title: '', video_url: '', category: '', duration: '' })
    fetchVideos()
  }

  const handleDelete = async (id: string) => {
    if (!supabase) return
    await supabase.from('videos').delete().eq('id', id)
    fetchVideos()
  }

  return (
    <section id="videos" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <Reveal>
        <div className="flex items-center justify-between gap-4 mb-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
            Videos
          </p>
          {isAdmin && (
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity"
            >
              {showForm ? <X size={13} /> : <Plus size={13} />}
              {showForm ? 'Hủy' : 'Thêm Video'}
            </button>
          )}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-10">
          Những thước phim tôi đã dựng
        </h2>
      </Reveal>

      {isAdmin && showForm && (
        <form
          onSubmit={handleAdd}
          className="grid sm:grid-cols-2 gap-3 mb-8 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
        >
          <div className="sm:col-span-2 flex flex-col gap-2 p-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--bg-soft)]">
            <p className="text-xs font-semibold text-[var(--text-faint)]">Tải Video Lên (Tùy chọn)</p>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="text-sm text-[var(--text)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--text)] file:text-[var(--bg)] hover:file:opacity-90"
            />
          </div>
          <input
            required
            placeholder="Tiêu đề"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none"
          />
          <input
            required={!file}
            placeholder="Link Video (Nếu không tải lên)"
            value={form.video_url}
            onChange={(e) => setForm({ ...form, video_url: e.target.value })}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text)] text-sm outline-none disabled:opacity-50"
            disabled={!!file}
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
            disabled={saving || uploading}
            className="sm:col-span-2 py-2.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {uploading ? 'Đang tải lên Cloudinary...' : saving ? 'Đang lưu...' : 'Lưu Video'}
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
                <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={20} className="text-white fill-white ml-0.5" />
                </button>
              </div>
              <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
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
            {isAdmin && (
              <button
                onClick={() => handleDelete(video.id)}
                aria-label="Delete video"
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white/80 hover:text-white flex items-center justify-center"
              >
                <Trash2 size={14} />
              </button>
            )}
            <a
              href={video.video_url}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden"
            >
              <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={20} className="text-white fill-white ml-0.5" />
              </button>
              {video.duration && (
                <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/30 px-2 py-0.5 rounded-full">
                  {video.duration}
                </span>
              )}
            </a>
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
