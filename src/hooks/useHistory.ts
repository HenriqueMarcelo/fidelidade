import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { PurchaseProps } from "./useCheckout"

export function useHistory() {
    const [histories, setHistories] = useState<PurchaseProps[]>([])
    async function fetchHistory() {
        const response = await api.get('/purchases')
        return response.data as PurchaseProps[]
    }

    useEffect(() => {
        async function aux() {
          const response = await fetchHistory()
          setHistories(response)
        }
        aux()
    }, [])

    return {
        histories
    }
}