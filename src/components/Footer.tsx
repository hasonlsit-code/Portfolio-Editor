import { useState } from 'react'
import { Lock, LogOut } from 'lucide-react'
import { profile } from '../data/content'
import { useAuth } from '../context/AuthContext'
import AdminLoginModal from './AdminLoginModal'

export default function Footer() {
  const { isAdmin, signOut } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  return (
    <footer className="px-6 sm:px-10 py-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--text-faint)]">
      <p>© 2026 {profile.name}. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <p>Built with React &amp; Tailwind CSS</p>
        {isAdmin ? (
          <button
            onClick={signOut}
            className="flex items-center gap-1 text-xs text-[var(--text-faint)] hover:text-[var(--text)] transition-colors"
          >
            <LogOut size={12} />
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            aria-label="Admin login"
            className="flex items-center gap-1 text-xs text-[var(--text-faint)] hover:text-[var(--text)] transition-colors opacity-40 hover:opacity-100"
          >
            <Lock size={12} />
          </button>
        )}
      </div>

      {showLogin && <AdminLoginModal onClose={() => setShowLogin(false)} />}
    </footer>
  )
}
