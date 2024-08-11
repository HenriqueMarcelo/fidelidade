import { Item } from "../contexts/ShoppingCartContext"

interface PaylodType {
    itemId: string
    quantity: number
  }
  
  interface ActionType {
    type: 'REMOVE_ALL_ITEMS' | 'DELETE_EVERYTHING' | 'ADD_ITEM' | 'REMOVE_ITEM' | 'REMOVE_ALL_ITEMS' | 'UPDATE_QUANTITY'
    payload: PaylodType
  }

export function shoppingCartItemsReducer(items: Item[], action: ActionType) {
    const { type, payload } = action
    switch (type) {
      case 'DELETE_EVERYTHING': {
        return []
      }

      case 'REMOVE_ALL_ITEMS': {
        const newItems = items.filter((item) => item.id !== payload.itemId)
        return newItems
      }
      
      case 'ADD_ITEM': {
        const test = items.find((item) => item.id === payload.itemId)
        if (test) {
          return items.map((item) => {
            if (item.id === payload.itemId) {
              item.quantity++
              return item
            } else {
              return item
            }
          })
        }
        return [...items, { id: payload.itemId, quantity: 1 }]
      }
      case 'UPDATE_QUANTITY': {
        const test = items.find((item) => item.id === payload.itemId)
        if (test) {
          const newItems = items.map((item) => {
            if (item.id === payload.itemId) {
              item.quantity = payload.quantity
              return item
            } else {
              return item
            }
          })
          return newItems
        }
  
        return [...items, { id: payload.itemId, quantity: payload.quantity }]
      }
  
      case 'REMOVE_ITEM': {
        const test = items.find((item) => item.id === payload.itemId)
        if (test) {
            if (test.quantity === 1) {
                return items.filter((item) => item.id !== payload.itemId)
            } else if (test.quantity > 1) {
                return items.map((item) => {
                    if (item.id === payload.itemId) {
                        item.quantity--
                        return item
                    } else {
                        return item
                    }
                })
            }
        } 
        return items
      }
      default:
        return items
    }
  }