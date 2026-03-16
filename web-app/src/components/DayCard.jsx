import { useState } from 'react'

const cityColors = {
  tokyo: 'border-city-tokyo',
  fuji: 'border-city-fuji',
  kyoto: 'border-city-kyoto',
  hiroshima: 'border-city-hiroshima',
  osaka: 'border-city-osaka',
  travel: 'border-city-travel',
}

const cityDots = {
  tokyo: 'bg-city-tokyo',
  fuji: 'bg-city-fuji',
  kyoto: 'bg-city-kyoto',
  hiroshima: 'bg-city-hiroshima',
  osaka: 'bg-city-osaka',
  travel: 'bg-city-travel',
}

export default function DayCard({ day }) {
  const [open, setOpen] = useState(false)
  const colorClass = cityColors[day.city] || cityColors.travel
  const dotClass = cityDots[day.city] || cityDots.travel

  return (
    <div
      className={`border-l-4 ${colorClass} rounded-xl bg-surface-card/80 backdrop-blur-sm shadow-sm shadow-black/20 transition-all duration-300 ${open ? 'shadow-md shadow-black/30' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3.5 flex items-center gap-3 cursor-pointer"
      >
        <div className={`w-2.5 h-2.5 rounded-full ${dotClass} shrink-0`} />
        <div className="flex-1 min-w-0">
          <p className="font-serif font-semibold text-sm md:text-base text-text-primary">{day.title}</p>
          <p className="text-[11px] text-text-muted font-medium mt-0.5">{day.subtitle}</p>
        </div>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-1 space-y-2.5">
          {day.items.map((item, i) => (
            <DayItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function DayItem({ item }) {
  const isReservation = item.type === 'reservation'
  const isMustDo = item.type === 'must-do'
  const isNote = item.type === 'note'

  return (
    <div className={`rounded-lg px-3 py-2.5 text-sm ${
      isReservation ? 'bg-gold-glow border border-gold/20' :
      isMustDo ? 'bg-sakura-glow border border-sakura/20' :
      isNote ? 'bg-white/5 border border-border-subtle italic' :
      'bg-surface-hover/50'
    }`}>
      {item.time && (
        <span className={`text-xs font-bold mr-2 ${
          isReservation ? 'text-gold' : isMustDo ? 'text-sakura' : 'text-text-secondary'
        }`}>
          {item.time}
        </span>
      )}
      {(isReservation || isMustDo) && (
        <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full mr-1.5 ${
          isReservation ? 'bg-gold/15 text-gold' : 'bg-sakura/15 text-sakura'
        }`}>
          {isReservation ? 'Reservation' : 'Must-Do'}
        </span>
      )}
      <span className="text-text-secondary leading-relaxed">{item.text}</span>
      {item.details && (
        <div className="mt-1.5 space-y-0.5">
          {item.details.map((d, j) => (
            <p key={j} className="text-xs text-text-muted pl-2 border-l-2 border-border-medium">{d}</p>
          ))}
        </div>
      )}
    </div>
  )
}
