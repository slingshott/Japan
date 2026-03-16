import SectionCard from '../components/SectionCard'
import {
  bigPicture, flights, flightNotes, people, accommodations,
  restaurants, mustDos, trains, weather, etiquette,
} from '../data/overview'

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto -mx-1 scrollbar-hide">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border-medium">
            {headers.map((h, i) => (
              <th key={i} className="text-left py-1.5 px-2 font-semibold text-text-muted whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border-subtle last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-1.5 px-2 text-text-secondary whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Overview() {
  return (
    <div className="space-y-3 animate-fade-in">
      <div>
        <h2 className="font-serif text-2xl font-bold text-text-primary">Trip Overview</h2>
        <p className="text-sm text-text-muted mt-1">Everything you need to know</p>
      </div>

      <SectionCard title="The Big Picture" icon="🗾" defaultOpen>
        <p className="text-sm text-text-secondary leading-relaxed">{bigPicture.text}</p>
        <p className="text-xs font-bold text-sakura mt-3 bg-sakura-glow rounded-lg px-3 py-2">{bigPicture.route}</p>
      </SectionCard>

      <SectionCard title="Flights" icon="✈️">
        <Table
          headers={['Leg', 'Flight', 'Date', 'Depart', 'Arrive']}
          rows={flights.map(f => [f.leg, f.flight, f.date, f.depart, f.arrive])}
        />
        <ul className="mt-3 space-y-1">
          {flightNotes.map((n, i) => (
            <li key={i} className="text-xs text-text-muted flex gap-2">
              <span className="text-text-muted/50">•</span>{n}
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="The Crew (7)" icon="👥">
        <div className="flex flex-wrap gap-2">
          {people.map((p, i) => (
            <div key={i} className="bg-surface-hover/60 rounded-lg px-3 py-2 flex-1 min-w-[140px]">
              <p className="font-semibold text-sm text-text-primary">{p.name}</p>
              <p className="text-[11px] text-text-muted mt-0.5">{p.notes}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Accommodations" icon="🏨">
        <Table
          headers={['Dates', 'Location', 'Stay', 'Who']}
          rows={accommodations.map(a => [a.dates, a.location, a.stay, a.who])}
        />
      </SectionCard>

      <SectionCard title="Restaurant Reservations" icon="🍽️">
        <div className="space-y-2.5">
          {restaurants.map((r, i) => (
            <div key={i} className="bg-gold-glow border border-gold/15 rounded-lg px-3 py-2.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-semibold text-sm text-text-primary">{r.name}</span>
                <span className="text-[10px] font-bold text-gold bg-gold/15 rounded-full px-2 py-0.5 whitespace-nowrap">{r.time}</span>
              </div>
              <p className="text-xs text-text-muted mt-0.5">{r.day} · {r.party}</p>
              <p className="text-xs text-text-muted">{r.notes}</p>
              {r.conf && <p className="text-[10px] text-text-muted/50 mt-1">Conf: {r.conf}</p>}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Must-Do List" icon="⭐">
        <div className="space-y-2">
          {mustDos.map((m) => (
            <div key={m.num} className="flex gap-3 items-start bg-sakura-glow rounded-lg px-3 py-2">
              <span className="text-lg font-bold text-sakura/50 shrink-0 w-6 text-center">{m.num}</span>
              <div>
                <p className="text-sm font-semibold text-text-primary">{m.what}</p>
                <p className="text-xs text-text-muted">{m.where} · {m.when}</p>
                {m.who && <p className="text-[10px] text-sakura/60 mt-0.5">{m.who}</p>}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Train Tickets" icon="🚄">
        <Table
          headers={['Date', 'Route', 'Depart', 'Arrive', 'Booked By']}
          rows={trains.map(t => [t.date, t.route, t.depart, t.arrive, t.bookedBy])}
        />
      </SectionCard>

      <SectionCard title="Weather Preview" icon="🌤️">
        <Table
          headers={['Location', 'Dates', 'Highs', 'Lows', 'Notes']}
          rows={weather.map(w => [w.location, w.dates, w.highs, w.lows, w.notes])}
        />
        <p className="text-xs text-text-muted mt-3 bg-sakura-glow rounded-lg px-3 py-2">
          🌸 Start of cherry blossom season. Shinjuku Gyoen (Tokyo) and Maruyama Park (Kyoto) have early-blooming weeping cherries.
        </p>
      </SectionCard>

      <SectionCard title="Etiquette Guide" icon="🎌">
        <div className="space-y-4">
          {etiquette.map((section, i) => (
            <div key={i}>
              <p className="text-xs font-bold text-text-secondary mb-1.5">{section.category}</p>
              <ul className="space-y-1">
                {section.rules.map((rule, j) => (
                  <li key={j} className="text-xs text-text-muted flex gap-2 leading-relaxed">
                    <span className="text-text-muted/50 shrink-0">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
