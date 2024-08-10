import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import History from '../../pages/History'
import Layout from '../../pages/Layout'

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/historico" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
