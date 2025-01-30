import { render, screen } from '@testing-library/react'
import Button from './index'

describe('Button component', () => {
  it('should render button with children', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render button with info', () => {
    render(<Button info="Info text">Click Me</Button>)
    const infoElement = screen.getByText('Info text')
    expect(infoElement).toBeInTheDocument()
    expect(infoElement.tagName).toBe('STRONG')
  })

  it('should apply additional props to the button', () => {
    render(<Button title="some title">Click Me</Button>)
    const buttonElement = screen.getByTitle('some title')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render without info if info prop is not provided', () => {
    render(<Button>Click Me</Button>)
    const infoElement = screen.queryByRole('strong')
    expect(infoElement).not.toBeInTheDocument()
  })

  it('should apply correct class to button', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    // Using REGEX because we are using scss modules.
    expect(buttonElement.className).toMatch(/button__button/)
  })

  it('should apply correct class to info', () => {
    render(<Button info="Info text">Click Me</Button>)
    const infoElement = screen.getByText('Info text')
    expect(infoElement.className).toMatch(/button__value/)
  })
})
