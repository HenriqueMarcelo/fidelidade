import { render } from '@testing-library/react'
import { Wrapper } from './Wrapper'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderWithContex = (ui: any, options?: any) => render(ui, { wrapper: Wrapper, ...options })

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// overrride render method
export { renderWithContex as render }
