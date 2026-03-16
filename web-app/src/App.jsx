import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Itinerary from './pages/Itinerary'
import Overview from './pages/Overview'
import Suggestions from './pages/Suggestions'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Itinerary />} />
        <Route path="overview" element={<Overview />} />
        <Route path="suggestions" element={<Suggestions />} />
      </Route>
    </Routes>
  )
}
