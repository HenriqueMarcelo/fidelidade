import { ReactNode } from 'react'
import { LoaderContextProvider } from '../contexts/LoaderContext'
import { ProductContextProvider } from '../contexts/ProductContext'
import { WalletContextProvider } from '../contexts/WalletContext'
import { ShoppingCartContextProvider } from '../contexts/ShoppingCartContext'
import { VisualShoppingCartContextProvider } from '../contexts/VisualShoppingCartContext'

type Props = {
  children: ReactNode
}

export function Wrapper({ children }: Props) {
  return (
    <LoaderContextProvider>
      <ProductContextProvider>
        <WalletContextProvider>
          <ShoppingCartContextProvider>
            <VisualShoppingCartContextProvider>{children}</VisualShoppingCartContextProvider>
          </ShoppingCartContextProvider>
        </WalletContextProvider>
      </ProductContextProvider>
    </LoaderContextProvider>
  )
}
