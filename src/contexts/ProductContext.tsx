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
  error: boolean
}

type Props = {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)

export function ProductContextProvider({ children }: Props) {
  const [products, setProducts] = useState<ProductType[]>([])
  const [error, setError] = useState(false)
  const { showLoader, hideLoader } = useContext(LoaderContext)

  const fetchProducts = useCallback(
    async function fetchProducts() {
      showLoader()
      setError(false)
      try {
        const response = await api.get('/products')
        setProducts(response.data as ProductType[])
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError(true)
      }
      hideLoader()
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
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
