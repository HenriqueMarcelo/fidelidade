import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  isHidden: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ItemContextType)

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [isHidden, setIsHidden] = useState(true)

  function open() {
    setIsHidden(false)
  }

  function close() {
    setIsHidden(true)
  }

  function toggle() {
    setIsHidden((val) => {
      return !val
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        isHidden,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
