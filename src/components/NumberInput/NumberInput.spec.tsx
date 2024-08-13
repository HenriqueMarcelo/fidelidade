import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { NumberInput } from './index.tsx'

describe('NumberInput Component', () => {
  it('should render correctly with initial value', () => {
    render(<NumberInput value={5} />)

    const inputElement = screen.getByRole('spinbutton')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue(5)
  })

  it('should call onChange with decremented value when "-" button is clicked', () => {
    const mockOnChange = vi.fn()
    render(<NumberInput value={5} onChange={mockOnChange} />)

    const buttons = screen.getAllByRole('button')
    const decrementButton = buttons[0]
    fireEvent.click(decrementButton)

    expect(mockOnChange).toHaveBeenCalledWith(4)
  })

  it('should call onChange with incremented value when "+" button is clicked', () => {
    const mockOnChange = vi.fn()
    render(<NumberInput value={5} onChange={mockOnChange} />)

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1]
    fireEvent.click(incrementButton)

    expect(mockOnChange).toHaveBeenCalledWith(6)
  })

  it('should call onChange with the custom value entered in the input', () => {
    const mockOnChange = vi.fn()
    render(<NumberInput value={5} onChange={mockOnChange} />)

    const inputElement = screen.getByRole('spinbutton')
    fireEvent.change(inputElement, { target: { value: '10' } })

    expect(mockOnChange).toHaveBeenCalledWith(10)
  })
})
