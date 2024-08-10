import Router from './components/Router'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartContextProvider>
      <Router />
    </ShoppingCartContextProvider>
  )
}

export default App
