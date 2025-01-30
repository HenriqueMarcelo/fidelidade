import { render, screen, fireEvent } from '@testing-library/react'
import Product from './index.tsx'
import { ShoppingCartContext, ShoppingCartContextType } from '../../contexts/ShoppingCartContext'

const mockProduct = {
  id: '1',
  name: 'Product 1',
  price: 100,
  image: 'image.png',
}

const mockContextValue: ShoppingCartContextType = {
  items: [],
  addItem: vi.fn(),
  removeItem: vi.fn(),
  updateQuantity: vi.fn(),
  removeAllItems: vi.fn(),
  deleteEverything: vi.fn(),
  totalPrice: 0,
  getQuantity: vi.fn().mockReturnValue(0), // Return 0 initially
}

const renderWithContext = (component: React.ReactNode) => {
  return render(<ShoppingCartContext.Provider value={mockContextValue}>{component}</ShoppingCartContext.Provider>)
}

describe('Product Component', () => {
  it('should render product information', () => {
    renderWithContext(<Product product={mockProduct} />)

    const productName = screen.getByText(mockProduct.name)
    const productPrice = screen.getByText(`${mockProduct.price}`)
    const productImage = screen.getByRole('img')

    expect(productName).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(productImage).toHaveAttribute('src', mockProduct.image)
  })

  it('should add product to cart when button is clicked', () => {
    renderWithContext(<Product product={mockProduct} />)

    const addButton = screen.getByText('Adicionar ao Carrinho')
    fireEvent.click(addButton)

    expect(mockContextValue.addItem).toHaveBeenCalledWith(mockProduct.id)
  })

  it('should display NumberInput when product is already in cart', () => {
    mockContextValue.getQuantity = vi.fn().mockReturnValue(1) // Simula que o produto já está no carrinho

    renderWithContext(<Product product={mockProduct} />)

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })

  it('should update quantity when NumberInput value changes', () => {
    mockContextValue.getQuantity = vi.fn().mockReturnValue(1) // Simula que o produto já está no carrinho

    renderWithContext(<Product product={mockProduct} />)

    const numberInput = screen.getByRole('spinbutton')
    fireEvent.change(numberInput, { target: { value: '2' } })

    expect(mockContextValue.updateQuantity).toHaveBeenCalledWith(mockProduct.id, 2)
  })
})
