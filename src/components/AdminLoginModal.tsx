import { useState, type FormEvent } from 'react'
import { X, Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabase'

export default function AdminLoginModal({ onClose }: { onClose: () => void }) {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const err = await signIn(email, password)
    setSubmitting(false)
    if (err) {
      setError(err)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-3xl glass-card-dark p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
          <Lock size={18} className="text-white" />
        </div>
        <h3 className="font-semibold text-lg text-white mb-1">Admin Login</h3>
        <p className="text-sm text-white/60 mb-6">Sign in to manage videos and content.</p>

        {!isSupabaseConfigured && (
          <p className="text-xs text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-xl px-3 py-2 mb-4">
            Backend chưa được cấu hình (thiếu biến môi trường Supabase).
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/40"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-white/30 transition-colors placeholder:text-white/40"
          />
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !isSupabaseConfigured}
            className="mt-2 w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
