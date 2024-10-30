import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react'
import { shoppingCartItemsReducer } from '../reducer/ShoppingCartItemsReducer'
import { ProductContext } from './ProductContext'

export interface Item {
  // deveria se chamar produto_id
  id: string
  quantity: number
}

export interface ShoppingCartContextType {
  items: Item[]
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  addItem: (itemId: string) => void
  removeAllItems: (itemId: string) => void
  deleteEverything: () => void
  totalPrice: number
  getQuantity: (itemId: string) => number
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [items, itemsDispatch] = useReducer(shoppingCartItemsReducer, [])
  const { products } = useContext(ProductContext)

  function deleteEverything() {
    itemsDispatch({ type: 'DELETE_EVERYTHING' })
  }

  function removeAllItems(itemId: string) {
    itemsDispatch({ type: 'REMOVE_ALL_ITEMS', payload: { itemId } })
  }

  function addItem(itemId: string) {
    itemsDispatch({ type: 'ADD_ITEM', payload: { itemId } })
  }

  function updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      removeAllItems(itemId)
    } else {
      itemsDispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
    }
  }

  function removeItem(itemId: string) {
    itemsDispatch({ type: 'REMOVE_ITEM', payload: { itemId } })
  }

  function getQuantity(itemId: string) {
    const item = items.find((item) => item.id === itemId)
    if (item) {
      return item.quantity
    }
    return 0
  }

  const totalPrice = useMemo(() => {
    return items.reduce((accumulator, item) => {
      const product = products.find((i) => i.id === item.id)
      if (product) {
        return accumulator + product.price * item.quantity
      }
      return accumulator
    }, 0)
  }, [items, products])

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        addItem,
        removeAllItems,
        removeItem,
        updateQuantity,
        deleteEverything,
        totalPrice,
        getQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
