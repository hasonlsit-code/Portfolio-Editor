import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import ShowcasePreview from './components/ShowcasePreview'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Videos from './components/Videos'
import MCHost from './components/MCHost'
import Blog from './components/Blog'
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
            <ShowcasePreview />
            <StatsBar />
            <About />
            <Skills />
            <Projects />
            <Videos />
            <MCHost />
            <Blog />
            <Contact />
            <Footer />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
