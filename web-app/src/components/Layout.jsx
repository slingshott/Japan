import { NavLink, Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

function SakuraPetal({ className }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor">
      <path d="M10 0C10 0 12 6 10 10C8 6 10 0 10 0ZM10 10C14 8 20 10 20 10C20 10 14 12 10 10ZM10 10C12 14 10 20 10 20C10 20 8 14 10 10ZM10 10C6 12 0 10 0 10C0 10 6 8 10 10Z" />
    </svg>
  )
}

const desktopTabs = [
  { to: '/', label: 'Itinerary' },
  { to: '/overview', label: 'Overview' },
  { to: '/suggestions', label: 'Ideas' },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface bg-seigaiha">
      <header className="sticky top-0 z-40 bg-surface-raised/95 backdrop-blur-md border-b border-border-subtle shadow-lg shadow-black/30">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <span className="text-2xl">⛩️</span>
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-xl font-bold tracking-wide text-text-primary">Japan 2026</h1>
            <SakuraPetal className="w-4 h-4 text-sakura opacity-70" />
          </div>
          <span className="ml-auto text-xs text-sakura opacity-50 font-medium md:hidden">Mar 19 – 29</span>

          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {desktopTabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                end={tab.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-sakura-glow text-sakura' : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 pb-20 md:pb-6">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Outlet />
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
