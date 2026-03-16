/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      colors: {
        'surface': '#0f0f17',
        'surface-raised': '#1a1a2e',
        'surface-card': '#1e1e35',
        'surface-hover': '#252545',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-medium': 'rgba(255,255,255,0.1)',
        'text-primary': '#eae6df',
        'text-secondary': 'rgba(234,230,223,0.6)',
        'text-muted': 'rgba(234,230,223,0.35)',
        'sakura': '#f2a7b3',
        'sakura-light': '#fce4ec',
        'sakura-dark': '#d4727e',
        'sakura-glow': 'rgba(242,167,179,0.15)',
        'gold': '#d4a843',
        'gold-light': '#f0d78c',
        'gold-glow': 'rgba(212,168,67,0.12)',
        'city-tokyo': '#ef5350',
        'city-fuji': '#42a5f5',
        'city-kyoto': '#ab47bc',
        'city-hiroshima': '#ffa726',
        'city-osaka': '#66bb6a',
        'city-travel': '#78909c',
      },
    },
  },
  plugins: [],
}
