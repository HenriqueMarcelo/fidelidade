import { createContext, ReactNode, useState } from 'react'

interface ItemContextType {
  isHidden: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

interface VisualShoppingCartContextProviderProps {
  children: ReactNode
}

export const VisualShoppingCartContext = createContext({} as ItemContextType)

export function VisualShoppingCartContextProvider({ children }: VisualShoppingCartContextProviderProps) {
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
    <VisualShoppingCartContext.Provider
      value={{
        isHidden,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </VisualShoppingCartContext.Provider>
  )
}
