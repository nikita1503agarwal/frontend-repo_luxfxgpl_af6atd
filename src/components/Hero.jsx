import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero({ onNext }) {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-fuchsia-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle gradient and grid overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1 text-sm tracking-wider uppercase">Interactive Portfolio</p>
        <h1 className="text-4xl sm:text-6xl font-black drop-shadow-md">
          Hi, I’m <span className="text-fuchsia-300">Your Name</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          I build playful, modern experiences. Swipe to explore my work, internships, goals, and more.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-900 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition-all"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-5 py-3 hover:bg-white/20 transition"
          >
            Next Section
          </button>
        </div>
      </div>
    </section>
  )
}
