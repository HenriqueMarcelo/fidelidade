import { useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { PurchaseProps } from './useCheckout'
import { LoaderContext } from '../contexts/LoaderContext'

export function useHistory() {
  const [histories, setHistories] = useState<PurchaseProps[]>([])
  const [error, setError] = useState(false)
  const {showLoader, hideLoader} = useContext(LoaderContext)
  async function fetchHistory() {
    const response = await api.get('/purchases')
    return response.data as PurchaseProps[]
  }

  useEffect(() => {
    async function aux() {
      showLoader()
      try {
        const response = await fetchHistory()
        setHistories(response)
        setError(false)
      } catch (error) {
        setError(!!error)
      } finally {
        hideLoader()
      } 
    }
    aux()
  }, [hideLoader, showLoader])

  return {
    histories,
    error,
  }
}
