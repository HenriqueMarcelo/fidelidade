import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { LoaderContext } from './LoaderContext'

export type ProductType = {
  id: string
  name: string
  price: number
  image: string
}

type ProductContextProps = {
  products: ProductType[]
}

type Props = {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)

export function ProductContextProvider({ children }: Props) {
  const [products, setProducts] = useState<ProductType[]>([])
  const { showLoader, hideLoader } = useContext(LoaderContext)

  const fetchProducts = useCallback(
    async function fetchProducts() {
      showLoader()
      const response = await api.get('/products')
      hideLoader()
      setProducts(response.data as ProductType[])
    },
    [hideLoader, showLoader]
  )

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
