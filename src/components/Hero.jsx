import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'

// 3D keyboard hero: clicking named keys in the Spline scene will navigate
// Expect Spline objects to be named with one of these keys: P, I, A, V, G, F, R
// or their full labels: Projects, Internships, About, Video, Goals, Fun, Resume
export default function Hero({ onGo }) {
  const nameToSection = useMemo(() => ({
    // Single-letter keys
    P: 'projects',
    I: 'internships',
    A: 'about',
    V: 'video',
    G: 'goals',
    F: 'fun',
    R: 'resume',
    // Full-word labels
    Projects: 'projects',
    Internships: 'internships',
    About: 'about',
    'About Me': 'about',
    Video: 'video',
    Goals: 'goals',
    Fun: 'fun',
    Resume: 'resume',
  }), [])

  // Map a section to its keyboard key so clicks can behave like a real keypress
  const sectionToKey = useMemo(() => ({
    projects: 'p',
    internships: 'i',
    about: 'a',
    video: 'v',
    goals: 'g',
    fun: 'f',
    resume: 'r',
  }), [])

  const handleMouseDown = (e) => {
    const raw = e?.target?.name || ''
    if (!raw) return
    const key = raw.trim()
    const dest = nameToSection[key]
    if (!dest) return

    // Dispatch a synthetic keydown so it behaves exactly like pressing the keyboard key
    const synthKey = sectionToKey[dest]
    if (synthKey) {
      const evt = new KeyboardEvent('keydown', { key: synthKey, bubbles: true })
      window.dispatchEvent(evt)
      return
    }

    // Fallback: directly delegate to parent navigation logic
    onGo?.(dest)
  }

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onMouseDown={handleMouseDown}
        />
      </div>

      {/* Minimal overlay helpers (no intro text) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      {/* Subtle hint at bottom-left */}
      <div className="relative z-10 w-full px-6 py-4 flex items-end justify-between">
        <p className="text-xs text-white/70">
          Click a key on the 3D keyboard: P • I • A • V • G • F • R
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-3 py-1.5 text-sm hover:bg-white/20 transition"
        >
          Skip to Projects
        </a>
      </div>
    </section>
  )
}
