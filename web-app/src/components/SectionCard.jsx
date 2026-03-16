import { useState } from 'react'

export default function SectionCard({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-xl bg-surface-card/80 backdrop-blur-sm shadow-sm shadow-black/20 border border-border-subtle overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3.5 flex items-center gap-3 cursor-pointer hover:bg-surface-hover/30 transition-colors"
      >
        {icon && <span className="text-lg shrink-0">{icon}</span>}
        <h3 className="flex-1 font-serif font-semibold text-sm md:text-base text-text-primary">{title}</h3>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-1 border-t border-border-subtle">
          {children}
        </div>
      </div>
    </div>
  )
}
