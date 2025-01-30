import { useCallback, useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import { WalletContext } from '../contexts/WalletContext'
import { ProductContext } from '../contexts/ProductContext'
import { api } from '../lib/axios'
import { VisualShoppingCartContext } from '../contexts/VisualShoppingCartContext'
import { LoaderContext } from '../contexts/LoaderContext'

interface IntemProps {
  quantity: number
  totalPrice: number
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}
export interface PurchaseProps {
  id?: number
  date: Date | string
  totalPrice: number
  items: (IntemProps | undefined)[]
}

export function useCheckout() {
  const { items, deleteEverything } = useContext(ShoppingCartContext)
  const { wallet, updateWallet } = useContext(WalletContext)
  const { close } = useContext(VisualShoppingCartContext)
  const { products } = useContext(ProductContext)
  const { showLoader, hideLoader } = useContext(LoaderContext)

  async function createPurchase(purchase: PurchaseProps) {
    await api.post('/purchases', purchase)
  }

  const doCheckOut = useCallback(
    async function doCheckOut() {
      const itemsArray = items.map((item) => {
        const product = products.find((i) => i.id === item.id)
        if (!product) {
          return
        }
        return {
          quantity: item.quantity,
          totalPrice: product.price * item.quantity,
          product: product,
        }
      })
      const totalPrice = itemsArray.reduce((prev, current) => prev + Number(current?.totalPrice), 0)
      const purchase = {
        date: new Date(),
        totalPrice,
        items: itemsArray,
      }

      showLoader()
      await createPurchase(purchase)
      // Isso deveria ser feito pelo backend;
      await updateWallet(wallet - purchase.totalPrice)
      hideLoader()
      deleteEverything()
      // todo: criar modal
      // alert('Compra feita com sucesso!')
      close()
    },
    [close, deleteEverything, hideLoader, items, products, showLoader, updateWallet, wallet]
  )

  return {
    doCheckOut,
  }
}
