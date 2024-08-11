import Router from './components/Router'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { VisualShoppingCartContextProvider } from './contexts/VisualShoppingCartContext'

function App() {
  return (
    <ShoppingCartContextProvider>
      <VisualShoppingCartContextProvider>
        <Router />
      </VisualShoppingCartContextProvider>
    </ShoppingCartContextProvider>
  )
}

export default App
