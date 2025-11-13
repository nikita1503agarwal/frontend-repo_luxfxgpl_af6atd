import { useEffect } from 'react'

// Map single-key shortcuts to section ids
export default function useKeyboardShortcuts(onGo) {
  useEffect(() => {
    const handler = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return
      const key = e.key.toLowerCase()
      const map = {
        p: 'projects',
        i: 'internships',
        a: 'about',
        v: 'video',
        g: 'goals',
        f: 'fun',
        r: 'resume',
        ArrowRight: 'next',
        ArrowLeft: 'prev',
      }
      const dest = map[e.key] || map[key]
      if (!dest) return
      e.preventDefault()
      onGo?.(dest)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onGo])
}
