import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

type WalletContextType = {
  wallet: number
}

type ProviderProps = {
  children: ReactNode
}

export const WalletContext = createContext({} as WalletContextType)

export function WalletContextProvider({ children }: ProviderProps) {
  const [wallet, setWallet] = useState(0)

  // todo: useCallback
  async function fetchWallet() {
    const response = await api.get('/wallet')

    setWallet(response.data.value)
  }

  useEffect(() => {
    fetchWallet()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        wallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
