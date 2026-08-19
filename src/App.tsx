import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Skills from './components/Skills'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--bg)]">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <Hero />
            <WhatIDo />
            <StatsBar />
            <About />
            <Skills />
            <Videos />
            <Contact />
            <Footer />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
