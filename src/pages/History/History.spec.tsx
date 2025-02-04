import { http, HttpResponse } from "msw";
import History from ".";
import { server } from "../../mocks/server";
import { render, screen } from "../../tests-utils/testing-library-utils";

test('Error message must apper when server has a error', async ()=> {
    server.resetHandlers(
        http.get('https://localhost:3000/purchases', () => {
            return new HttpResponse(null, { status: 500 })
        }),
        http.get('http://localhost:3000/wallet', () => {
            return new HttpResponse(null, { status: 500 })
        })
    )
    render(<History />)

    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveTextContent("Algo deu errado, tente novamente mais tarde.")
})