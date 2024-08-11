import Router from './components/Router'
import { VisualShoppingCartContextProvider } from './contexts/VisualShoppingCartContext'

function App() {
  return (
    <VisualShoppingCartContextProvider>
      <Router />
    </VisualShoppingCartContextProvider>
  )
}

export default App
