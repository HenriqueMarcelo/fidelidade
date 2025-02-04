import { http, HttpResponse } from "msw"
import { server } from "../../mocks/server"
import { render, screen } from "../../tests-utils/testing-library-utils"
import Home from "."

test('Error message must apper when server has a error', async () => {
    server.resetHandlers(
        http.get('http://localhost:3000/products', () => {
            return new HttpResponse(null, { status: 500 })
        }),
        http.get('http://localhost:3000/wallet', () => {
            return new HttpResponse(null, { status: 500 })
        })
    )
    render(<Home />)
  
    const errorMessage = await screen.findByRole('alert')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveTextContent("Algo deu errado, tente novamente mais tarde.")
  })