import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LoaderLine } from './index.tsx'
import { describe, it, expect } from 'vitest'

describe('LoaderLine Component', () => {
  it('renders the loader line with the correct class', () => {
    render(<LoaderLine />)
    const loaderElement = screen.getByRole('presentation')
    expect(loaderElement).toBeInTheDocument()
    // todo: isso deveria ser um outro teste
    expect(loaderElement.className).toMatch(/loader-line/)
  })
})
