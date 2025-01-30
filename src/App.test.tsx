import { render, screen, within, waitFor } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('começa com valor correto na carteira, carrinho zerado e 3 produtos', async () => {
  render(<App />)

  const carteiraContainer = await screen.findByText('Carteira:', { exact: false })
  const valorCarteira = within(carteiraContainer).getByRole('strong')
  expect(valorCarteira).toHaveTextContent('25 pontos')

  const botoesCarrinho = await screen.findAllByRole('button', { name: /carrinho:/i })
  const botaoCarrinhoHeader = botoesCarrinho[0]
  const quantidadeCarrinho = within(botaoCarrinhoHeader).getByRole('strong')
  expect(quantidadeCarrinho).toHaveTextContent('0')

  const produtos = await screen.findAllByRole('article')
  expect(produtos).toHaveLength(3)
})

test('happy path', async () => {
  render(<App />)
  const user = userEvent.setup()

  // Adiciona um produto ao carrinho
  const todosBotoesAdicionarAoCarrinho = await screen.findAllByRole('button', { name: /Adicionar ao Carrinho/i })
  const adicionarAoCarrinhoSuco = todosBotoesAdicionarAoCarrinho[0]
  user.click(adicionarAoCarrinhoSuco)

  // ...existing code...

  // Abre o carrinho
  const botoesCarrinho = await screen.findAllByRole('button', { name: /carrinho:/i })
  const botaoCarrinhoHeader = botoesCarrinho[0]
  user.click(botaoCarrinhoHeader)

  // Confirma compra
  const botaoCompra = await screen.findByRole('button', { name: /Confirmar Compra/i })
  user.click(botaoCompra)

  // Verifica se carrinho foi limpo
  const quantidadeCarrinho = await within(botaoCarrinhoHeader).findByRole('strong')

  await waitFor(() => {
    expect(quantidadeCarrinho).toHaveTextContent('0');
  });
})
