import React from 'react'
import { FileText, User, Film, Briefcase, Target, Images, Code } from 'lucide-react'

// Floating keyboard-like navigation with clickable keys and shortcut hints
export default function KeyboardNav({ onGo }) {
  const buttons = [
    { id: 'projects', label: 'Projects', hint: 'P', icon: Code },
    { id: 'internships', label: 'Internships', hint: 'I', icon: Briefcase },
    // Per request: About Me button routes to Video section
    { id: 'about', label: 'About Me', hint: 'A', icon: User },
    { id: 'video', label: 'Video', hint: 'V', icon: Film },
    { id: 'goals', label: 'Goals', hint: 'G', icon: Target },
    { id: 'fun', label: 'Fun', hint: 'F', icon: Images },
    { id: 'resume', label: 'Resume', hint: 'R', icon: FileText },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-2 shadow-xl">
        {buttons.map(({ id, label, hint, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onGo?.(id)}
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm"
            aria-label={`Go to ${label}`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{label}</span>
            <kbd className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-white/70 hidden sm:inline-block">{hint}</kbd>
          </button>
        ))}
      </div>
    </div>
  )
}
