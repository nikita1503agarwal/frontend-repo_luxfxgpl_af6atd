import React, { useRef } from 'react'
import Hero from './components/Hero'
import CarouselSections from './components/CarouselSections'

function App() {
  const carouselRef = useRef(null)
  const handleNext = () => {
    const el = document.querySelector('#projects')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onNext={handleNext} />
      <CarouselSections ref={carouselRef} />
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love and motion
      </footer>
    </div>
  )
}

export default App
