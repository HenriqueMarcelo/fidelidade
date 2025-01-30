import { render, screen } from '@testing-library/react'
import { LoaderLine } from './index.tsx'

describe('LoaderLine Component', () => {
  it('renders the loader line with the correct class', () => {
    render(<LoaderLine />)
    const loaderElement = screen.getByRole('presentation')
    expect(loaderElement).toBeInTheDocument()
    // todo: isso deveria ser um outro teste
    expect(loaderElement.className).toMatch(/loader-line/)
  })
})
