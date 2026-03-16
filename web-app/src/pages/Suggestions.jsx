import { useState } from 'react'
import { suggestions } from '../data/suggestions'

const categoryColors = {
  'Nature': 'bg-green-900/40 text-green-400 border border-green-800/40',
  'Schedule Gap': 'bg-blue-900/40 text-blue-400 border border-blue-800/40',
  'Must-See': 'bg-red-900/40 text-red-400 border border-red-800/40',
  'Kyoto': 'bg-purple-900/40 text-purple-400 border border-purple-800/40',
  'Osaka': 'bg-orange-900/40 text-orange-400 border border-orange-800/40',
  'Fuji': 'bg-sky-900/40 text-sky-400 border border-sky-800/40',
  'Andrew & Megan': 'bg-pink-900/40 text-pink-400 border border-pink-800/40',
  'Tips': 'bg-amber-900/40 text-amber-400 border border-amber-800/40',
}

const categories = ['All', ...new Set(suggestions.map(s => s.category))]

export default function Suggestions() {
  const [filter, setFilter] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = filter === 'All' ? suggestions : suggestions.filter(s => s.category === filter)

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h2 className="font-serif text-2xl font-bold text-text-primary">Ideas & Suggestions</h2>
        <p className="text-sm text-text-muted mt-1">Things to consider adding to the trip</p>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[11px] font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer border ${
              filter === cat
                ? 'bg-sakura-glow text-sakura border-sakura/25'
                : 'bg-surface-card/50 text-text-muted border-border-subtle hover:bg-surface-hover/50 hover:text-text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((s) => {
          const isOpen = expandedId === s.id
          return (
            <div
              key={s.id}
              className={`rounded-xl bg-surface-card/80 backdrop-blur-sm shadow-sm shadow-black/20 border border-border-subtle overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md shadow-black/30' : ''}`}
            >
              <button
                onClick={() => setExpandedId(isOpen ? null : s.id)}
                className="w-full text-left px-4 py-3.5 flex items-center gap-3 cursor-pointer"
              >
                <span className="text-xl shrink-0">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-semibold text-sm text-text-primary">{s.title}</p>
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 ${categoryColors[s.category] || 'bg-surface-hover text-text-muted'}`}>
                    {s.category}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 pt-1 space-y-3 border-t border-border-subtle">
                  {s.sections.map((section, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-text-secondary mb-1">{section.heading}</p>
                      <ul className="space-y-1">
                        {section.bullets.map((b, j) => (
                          <li key={j} className="text-xs text-text-muted flex gap-2 leading-relaxed">
                            <span className="text-text-muted/50 shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
