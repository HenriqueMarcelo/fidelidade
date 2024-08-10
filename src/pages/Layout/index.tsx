import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import ShoppingCart from '../../components/ShoppingCart'

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <ShoppingCart />
    </main>
  )
}
