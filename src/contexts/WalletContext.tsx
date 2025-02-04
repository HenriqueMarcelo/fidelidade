import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

type WalletContextType = {
  wallet: number
  updateWallet: (purchase: number) => Promise<void>
}

type ProviderProps = {
  children: ReactNode
}

export const WalletContext = createContext({} as WalletContextType)

export function WalletContextProvider({ children }: ProviderProps) {
  const [wallet, setWallet] = useState(0)

  async function fetchWallet() {
    try {
      const response = await api.get('/wallet')
      setWallet(response.data.value)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setWallet(0)
    }
  }

  // Isso deveria ser feito pelo backend;
  async function updateWallet(purchase: number) {
    await api.put('/wallet', {
      value: purchase,
    })

    await fetchWallet()
  }

  useEffect(() => {
    fetchWallet()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        wallet,
        updateWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
