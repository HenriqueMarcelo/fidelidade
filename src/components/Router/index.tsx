import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import History from '../../pages/History'

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}
