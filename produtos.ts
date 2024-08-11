export const produtos = [
  {
    id: '1',
    name: 'Suco de Laranja',
    price: 5,
    image: 'https://placehold.co/600x400',
  },
  {
    id: '2',
    name: '10% de desconto',
    price: 10,
    image: 'https://placehold.co/600x400',
  },
  {
    id: '3',
    name: 'Almoço Especial',
    price: 20,
    image: 'https://placehold.co/600x400',
  },
]

export type Product = {
  id: string,
  name: string,
  price: number,
  image: string
}