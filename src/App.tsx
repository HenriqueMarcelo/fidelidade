import Router from './components/Router'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { VisualShoppingCartContextProvider } from './contexts/VisualShoppingCartContext'
import { WalletContextProvider } from './contexts/WalletContext'

function App() {
  return (
    <WalletContextProvider>
      <ShoppingCartContextProvider>
        <VisualShoppingCartContextProvider>
          <Router />
        </VisualShoppingCartContextProvider>
      </ShoppingCartContextProvider>
    </WalletContextProvider>
  )
}

export default App
