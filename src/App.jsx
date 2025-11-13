import React, { useCallback, useRef } from 'react'
import Hero from './components/Hero'
import CarouselSections from './components/CarouselSections'
import KeyboardNav from './components/KeyboardNav'
import useKeyboardShortcuts from './components/useKeyboardShortcuts'

function App() {
  const carouselRef = useRef(null)

  const goTo = useCallback((idOrDir) => {
    // Map About Me request to the Video section per user request
    if (idOrDir === 'about') idOrDir = 'video'

    if (idOrDir === 'resume') {
      const resumeUrl = import.meta.env.VITE_RESUME_URL
      if (resumeUrl) {
        window.open(resumeUrl, '_blank', 'noopener,noreferrer')
        return
      }
      const resumeAnchor = document.getElementById('resume')
      if (resumeAnchor) resumeAnchor.scrollIntoView({ behavior: 'smooth', inline: 'start' })
      return
    }

    if (idOrDir === 'next' || idOrDir === 'prev') {
      carouselRef.current?.goTo?.(idOrDir)
      return
    }

    const section = document.getElementById(idOrDir)
    if (section) section.scrollIntoView({ behavior: 'smooth', inline: 'start' })
  }, [])

  useKeyboardShortcuts(goTo)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onGo={goTo} />
      <CarouselSections ref={carouselRef} />
      <KeyboardNav onGo={goTo} />
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love and motion
      </footer>
    </div>
  )
}

export default App
