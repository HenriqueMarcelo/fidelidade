import { useContext } from "react"
import { ShoppingCartContext } from "../contexts/ShoppingCartContext"
import { WalletContext } from "../contexts/WalletContext"
import { produtos } from "../../produtos"
import { api } from "../lib/axios"
import { VisualShoppingCartContext } from "../contexts/VisualShoppingCartContext"

export function useCheckout() {
    const { items, deleteEverything } = useContext(ShoppingCartContext)
    const { wallet, updateWallet } = useContext(WalletContext)
    const { close } = useContext(VisualShoppingCartContext)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function createPurchase(purchase: any) {
        await api.post('/purchases', purchase)
    }

    async function doCheckOut() {
        const itemsArray = items.map((item) => {
            const produto = produtos.find((i) => i.id === item.id)
            if(!produto) {
                return
            }
            return {
                quantity: item.quantity,
                totalPrice: produto.price * item.quantity,
                product: produto,
            }
        })
        const totalPrice = itemsArray.reduce((prev, current) => prev + Number(current?.totalPrice),0)
        const purchase = {
            date: new Date(),
            totalPrice, 
            items: itemsArray
        }

        await createPurchase(purchase)
        // Isso deveria ser feito pelo backend;
        await updateWallet(wallet - purchase.totalPrice)
        deleteEverything()
        // todo: trocar para modal
        alert("Compra feita com sucesso!");
        close()

    }

    return {
        doCheckOut
    }
}