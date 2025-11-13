import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Linkedin, FileText, Play, ChevronLeft, ChevronRight } from 'lucide-react'

// Simple horizontal swiper-style sections controlled by arrows/swipes
export default function CarouselSections() {
  const containerRef = useRef(null)
  const controls = useAnimation()

  const scrollByViewport = (dir) => {
    const el = containerRef.current
    if (!el) return
    const amount = window.innerWidth
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const sections = [
    { id: 'projects', title: 'Projects' },
    { id: 'internships', title: 'Internships' },
    { id: 'about', title: 'About Me' },
    { id: 'video', title: 'Intro Video' },
    { id: 'goals', title: 'Goals' },
    { id: 'fun', title: 'Fun Facts' },
    { id: 'resume', title: 'Resume Highlights' },
  ]

  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-wide">Swipe Sections</h2>
        <div className="flex gap-2">
          <button aria-label="Prev" onClick={() => scrollByViewport(-1)} className="p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10"><ChevronLeft /></button>
          <button aria-label="Next" onClick={() => scrollByViewport(1)} className="p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10"><ChevronRight /></button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="snap-x snap-mandatory overflow-x-auto no-scrollbar flex w-full"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Projects */}
        <Section id="projects" title="Projects" accent="from-fuchsia-500/20 to-indigo-500/20">
          <ProjectGrid />
        </Section>

        {/* Internships */}
        <Section id="internships" title="Internships" accent="from-teal-500/20 to-emerald-500/20">
          <Internships />
        </Section>

        {/* About Me */}
        <Section id="about" title="About Me" accent="from-amber-500/20 to-rose-500/20">
          <AboutMe />
        </Section>

        {/* Video */}
        <Section id="video" title="Intro Video" accent="from-indigo-500/20 to-purple-500/20">
          <VideoIntro />
        </Section>

        {/* Goals */}
        <Section id="goals" title="Goals" accent="from-sky-500/20 to-cyan-500/20">
          <Goals />
        </Section>

        {/* Fun Facts */}
        <Section id="fun" title="Fun Facts" accent="from-pink-500/20 to-violet-500/20">
          <FunFacts />
        </Section>

        {/* Resume */}
        <Section id="resume" title="Resume Highlights" accent="from-lime-500/20 to-yellow-500/20">
          <Resume />
        </Section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-end gap-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#0a66c2] px-4 py-2 rounded-md hover:brightness-110">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href="#resume" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-md hover:bg-slate-100">
          <FileText className="w-4 h-4" /> Resume
        </a>
      </div>
    </section>
  )
}

function Section({ id, title, accent, children }) {
  return (
    <div
      id={id}
      className={`min-w-full snap-start px-6 py-12 sm:py-16 bg-gradient-to-br ${accent} border-t border-white/10`}
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        {children}
      </div>
    </div>
  )
}

function ProjectGrid() {
  const projects = [
    { title: 'Playful UI Kit', desc: 'A whimsical component library.', link: '#' },
    { title: 'Motion Gallery', desc: 'Framer Motion experiments.', link: '#' },
    { title: 'AI Blog Engine', desc: 'Content generation pipeline.', link: '#' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={i}
          href={p.link}
          whileHover={{ y: -6 }}
          className="group rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:bg-white/10 transition"
        >
          <div className="h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/0 mb-4" />
          <h4 className="text-lg font-semibold">{p.title}</h4>
          <p className="text-white/80 text-sm">{p.desc}</p>
          <span className="text-fuchsia-300 text-sm mt-3 inline-block opacity-0 group-hover:opacity-100 transition">View Project →</span>
        </motion.a>
      ))}
    </div>
  )
}

function Internships() {
  const items = [
    { company: 'Acme Corp', role: 'Frontend Intern', time: 'Summer 2024' },
    { company: 'Neon Labs', role: 'Product Design Intern', time: 'Fall 2024' },
  ]
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {items.map((it, i) => (
        <li key={i} className="rounded-xl bg-white/5 p-4 border border-white/10">
          <p className="text-sm text-white/70">{it.time}</p>
          <p className="font-semibold">{it.company}</p>
          <p className="text-white/90">{it.role}</p>
        </li>
      ))}
    </ul>
  )
}

function AboutMe() {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        I’m a builder who loves turning ideas into interactive, joyful products. My work blends design,
        motion, and modern web tech to craft experiences that feel alive. Outside of code, you’ll find me
        exploring photography and game design for inspiration.
      </p>
    </div>
  )
}

function VideoIntro() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-black/40">
        <video controls className="w-full h-full">
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-white/80 text-sm">30-second introduction: Tell me about yourself.</p>
    </div>
  )
}

function Goals() {
  const goals = [
    'Ship delightful, accessible interfaces',
    'Contribute to open-source motion/design tools',
    'Grow as a product-minded engineer',
  ]
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {goals.map((g, i) => (
        <li key={i} className="rounded-xl bg-white/5 p-4 border border-white/10 flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-fuchsia-300" />
          <span>{g}</span>
        </li>
      ))}
    </ul>
  )
}

function FunFacts() {
  const facts = [
    'I photograph city nights and neon lights.',
    'I prototype mini games to test interactions.',
    'I collect vintage keyboards for the perfect click.',
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {facts.map((f, i) => (
        <div key={i} className="rounded-xl bg-white/5 p-4 border border-white/10">{f}</div>
      ))}
    </div>
  )
}

function Resume() {
  const highlights = [
    { title: 'Frontend Engineering', detail: '3+ years building React apps with motion-first design.' },
    { title: 'Design Systems', detail: 'Created component libraries used across teams.' },
    { title: 'Impact', detail: 'Improved conversion by 18% via UX experiments.' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {highlights.map((h, i) => (
        <div key={i} className="rounded-xl bg-white/5 p-4 border border-white/10">
          <h4 className="font-semibold">{h.title}</h4>
          <p className="text-white/80 text-sm">{h.detail}</p>
        </div>
      ))}
    </div>
  )
}
