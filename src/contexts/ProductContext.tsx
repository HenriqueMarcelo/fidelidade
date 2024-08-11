import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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

  async function fetchProducts() {
    const response = await api.get('/products')
    setProducts(response.data as ProductType[])
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
