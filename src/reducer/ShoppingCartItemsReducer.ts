interface Item {
    id: string;
    quantity: number;
}
  
  // Tipos de ações que não exigem payload
  interface DeleteEverythingAction {
    type: 'DELETE_EVERYTHING';
  }
  
  interface RemoveAllItemsAction {
    type: 'REMOVE_ALL_ITEMS';
    payload: {
      itemId: string;
    };
  }
  
  interface AddItemAction {
    type: 'ADD_ITEM';
    payload: {
      itemId: string;
    };
  }
  
  interface RemoveItemAction {
    type: 'REMOVE_ITEM';
    payload: {
      itemId: string;
    };
  }
  
  interface UpdateQuantityAction {
    type: 'UPDATE_QUANTITY';
    payload: {
      itemId: string;
      quantity: number;
    };
  }
  
  // Tipo de ação que não precisa de payload
  type ActionType =
    | DeleteEverythingAction
    | RemoveAllItemsAction
    | AddItemAction
    | RemoveItemAction
    | UpdateQuantityAction;

export function shoppingCartItemsReducer(items: Item[], action: ActionType) {
    switch (action.type) {
      case 'DELETE_EVERYTHING': {
        return []
      }

      case 'REMOVE_ALL_ITEMS': {
        const { itemId } = action.payload;
        const newItems = items.filter((item) => item.id !== itemId)
        return newItems
      }
      
      case 'ADD_ITEM': {
        const { itemId } = action.payload;
        const test = items.find((item) => item.id === itemId)
        if (test) {
          return items.map((item) => {
            if (item.id === itemId) {
              item.quantity++
              return item
            } else {
              return item
            }
          })
        }
        return [...items, { id: itemId, quantity: 1 }]
      }
      case 'UPDATE_QUANTITY': {
        const { itemId, quantity } = action.payload;
        const test = items.find((item) => item.id === itemId)
        if (test) {
          const newItems = items.map((item) => {
            if (item.id === itemId) {
              item.quantity = quantity
              return item
            } else {
              return item
            }
          })
          return newItems
        }
  
        return [...items, { id: itemId, quantity: quantity }]
      }
  
      case 'REMOVE_ITEM': {
        const { itemId } = action.payload;
        const test = items.find((item) => item.id === itemId)
        if (test) {
            if (test.quantity === 1) {
                return items.filter((item) => item.id !== itemId)
            } else if (test.quantity > 1) {
                return items.map((item) => {
                    if (item.id === itemId) {
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