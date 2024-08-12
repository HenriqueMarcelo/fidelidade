import Router from './components/Router'
import { LoaderContextProvider } from './contexts/LoaderContext'
import { ProductContextProvider } from './contexts/ProductContext'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { VisualShoppingCartContextProvider } from './contexts/VisualShoppingCartContext'
import { WalletContextProvider } from './contexts/WalletContext'

function App() {
  return (
    <LoaderContextProvider>
      <ProductContextProvider>
        <WalletContextProvider>
          <ShoppingCartContextProvider>
            <VisualShoppingCartContextProvider>
              <Router />
            </VisualShoppingCartContextProvider>
          </ShoppingCartContextProvider>
        </WalletContextProvider>
      </ProductContextProvider>
    </LoaderContextProvider>
  )
}

export default App
