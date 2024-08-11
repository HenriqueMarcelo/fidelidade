import { createContext, ReactNode, useReducer } from 'react'
import { shoppingCartItemsReducer } from '../reducer/ShoppingCartItemsReducer'

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
    if (quantity === 0) {
      removeAllItems(itemId)
    }
    itemsDispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
  }

  function removeItem(itemId: string) {
    itemsDispatch({ type: 'REMOVE_ITEM', payload: { itemId } })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        addItem,
        removeAllItems,
        removeItem,
        updateQuantity,
        deleteEverything,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
