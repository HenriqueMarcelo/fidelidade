import { createContext, ReactNode, useReducer } from 'react'
import { shoppingCartItemsReducer } from '../reducer/ShoppingCartItemsReducer'
import { produtos } from '../../produtos'

export interface Item {
  id: string
  quantity: number
}

interface ShoppingCartContextType {
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

  // Todo: usar useMemo
  const totalPrice = items.reduce((accumulator, item) => {
    const produto = produtos.find((i) => i.id === item.id)
    if (produto) {
      return accumulator + produto.price * item.quantity
    }
    return accumulator
  }, 0)

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
