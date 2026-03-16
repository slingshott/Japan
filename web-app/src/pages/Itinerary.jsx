import DayCard from '../components/DayCard'
import { days, warnings } from '../data/itinerary'

const cityLabels = {
  tokyo: { label: 'Tokyo', color: 'bg-city-tokyo' },
  fuji: { label: 'Fuji', color: 'bg-city-fuji' },
  kyoto: { label: 'Kyoto', color: 'bg-city-kyoto' },
  hiroshima: { label: 'Hiroshima', color: 'bg-city-hiroshima' },
  osaka: { label: 'Osaka', color: 'bg-city-osaka' },
}

export default function Itinerary() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-serif text-2xl font-bold text-text-primary">Itinerary</h2>
        <p className="text-sm text-text-muted mt-1">March 19 – 29, 2026 · 10 days · 5 cities</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {Object.entries(cityLabels).map(([key, { label, color }]) => (
          <span key={key} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-text-muted bg-surface-card/60 rounded-full px-2.5 py-1 border border-border-subtle">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            {label}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {days.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>

      {warnings.length > 0 && (
        <div className="space-y-2 pt-2">
          <h3 className="font-serif font-semibold text-sm text-text-secondary flex items-center gap-2">
            <span>⚠️</span> Heads Up
          </h3>
          {warnings.map((w, i) => (
            <div key={i} className="bg-gold-glow border border-gold/15 rounded-lg px-3 py-2.5">
              <p className="text-xs font-bold text-gold mb-0.5">{w.title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
