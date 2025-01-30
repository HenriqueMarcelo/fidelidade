import { render, screen } from '@testing-library/react'
import HistoryItem from './index.tsx'
import { PurchaseProps } from '../../hooks/useCheckout'

describe('HistoryItem Component', () => {
  const mockHistory: PurchaseProps = {
    date: '2024-08-11T20:50:05.993Z',
    totalPrice: 85,
    items: [
      {
        quantity: 1,
        totalPrice: 5,
        product: {
          id: '1',
          name: 'Produto A',
          price: 5,
          image: 'https://placehold.co/600x400',
        },
      },
      {
        quantity: 2,
        totalPrice: 20,
        product: {
          id: '2',
          name: 'Produto B',
          price: 10,
          image: 'https://placehold.co/600x400',
        },
      },
      {
        quantity: 3,
        totalPrice: 60,
        product: {
          id: '3',
          name: 'Produto C',
          price: 20,
          image: 'https://placehold.co/600x400',
        },
      },
    ],
    id: 24,
  }

  it('should render the purchase date correctly', () => {
    render(<HistoryItem history={mockHistory} />)

    const dateElement = screen.getByText('11/08/2024')
    expect(dateElement).toBeInTheDocument()
  })

  // todo: repensar para não gerar falsos positivos
  it('should render the table with the purchase items', () => {
    render(<HistoryItem history={mockHistory} />)

    const productAName = screen.getByText('Produto A')
    const productAPrice = screen.getAllByText('5 pontos')
    const productAQuantity = screen.getByText('1')
    const productATotal = screen.getAllByText('5 pontos')

    const productBName = screen.getByText('Produto B')
    const productBPrice = screen.getAllByText('10 pontos')
    const productBQuantity = screen.getByText('2')
    const productBTotal = screen.getAllByText('20 pontos')

    const productCName = screen.getByText('Produto C')
    const productCPrice = screen.getAllByText('20 pontos')
    const productCQuantity = screen.getByText('3')
    const productCTotal = screen.getAllByText('60 pontos')

    expect(productAName).toBeInTheDocument()
    expect(productAPrice).toHaveLength(2)
    expect(productAQuantity).toBeInTheDocument()
    expect(productATotal).toHaveLength(2)

    expect(productBName).toBeInTheDocument()
    expect(productBPrice).toHaveLength(1)
    expect(productBQuantity).toBeInTheDocument()
    expect(productBTotal).toHaveLength(2)

    expect(productCName).toBeInTheDocument()
    expect(productCPrice).toHaveLength(2)
    expect(productCQuantity).toBeInTheDocument()
    expect(productCTotal).toHaveLength(1)
  })

  it('should render the total price correctly', () => {
    render(<HistoryItem history={mockHistory} />)

    const totalPriceElement = screen.getByTestId('total-price')
    expect(totalPriceElement).toHaveTextContent('85 pontos')
  })

  it('should render correctly when there are no items', () => {
    const emptyHistory: PurchaseProps = {
      date: new Date('2024-08-12T00:00:00Z'),
      items: [],
      totalPrice: 0,
    }

    render(<HistoryItem history={emptyHistory} />)

    const noItemsMessage = screen.queryByRole('table')
    expect(noItemsMessage).not.toBeInTheDocument()

    const totalPriceElement = screen.getByText('0 pontos')
    expect(totalPriceElement).toBeInTheDocument()
  })
})
