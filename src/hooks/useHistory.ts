import { api } from "../lib/axios"
import { PurchaseProps } from "./useCheckout"

export function useHistory() {
    async function fetchHistory() {
        const response = await api.get('/purchases')
        return response.data as PurchaseProps[]
    }

    return {
        fetchHistory
    }
}