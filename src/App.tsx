import Router from './components/Router'
import { ProductContextProvider } from './contexts/ProductContext'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { VisualShoppingCartContextProvider } from './contexts/VisualShoppingCartContext'
import { WalletContextProvider } from './contexts/WalletContext'

function App() {
  return (
    <ProductContextProvider>
      <WalletContextProvider>
        <ShoppingCartContextProvider>
          <VisualShoppingCartContextProvider>
            <Router />
          </VisualShoppingCartContextProvider>
        </ShoppingCartContextProvider>
      </WalletContextProvider>
    </ProductContextProvider>
  )
}

export default App
