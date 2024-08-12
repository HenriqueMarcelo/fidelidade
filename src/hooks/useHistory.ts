import { useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { PurchaseProps } from './useCheckout'
import { LoaderContext } from '../contexts/LoaderContext'

export function useHistory() {
  const [histories, setHistories] = useState<PurchaseProps[]>([])
  const {showLoader, hideLoader} = useContext(LoaderContext)
  async function fetchHistory() {
    const response = await api.get('/purchases')
    return response.data as PurchaseProps[]
  }

  useEffect(() => {
    async function aux() {
      showLoader()
      const response = await fetchHistory()
      hideLoader()
      setHistories(response)
    }
    aux()
  }, [hideLoader, showLoader])

  return {
    histories,
  }
}
