import { delay, http, HttpResponse } from 'msw'

export const handlers = [
  http.post('http://localhost:3000/purchases', async () => {
    await delay(40)
    return HttpResponse.json({ orderNumber: 123 }, { status: 201 })
  }),

  http.get('http://localhost:3000/products', () => {
    return HttpResponse.json([
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
    ])
  }),
  http.get('http://localhost:3000/wallet', () => {
    return HttpResponse.json({
      value: 25,
    })
  }),
  http.put('http://localhost:3000/wallet', () => {
    return HttpResponse.json({
      value: 20,
    })
  }),
  http.get('http://localhost:3000/purchases', () => {
    return HttpResponse.json([
      {
        date: '2024-08-11T18:39:39.041Z',
        totalPrice: 80,
        items: [
          {
            quantity: 8,
            totalPrice: 80,
            product: {
              id: '2',
              name: '10% de desconto',
              price: 10,
              image: 'https://placehold.co/600x400',
            },
          },
        ],
        id: 1,
      },
      {
        date: '2024-08-11T18:39:55.494Z',
        totalPrice: 155,
        items: [
          {
            quantity: 7,
            totalPrice: 35,
            product: {
              id: '1',
              name: 'Suco de Laranja',
              price: 5,
              image: 'https://placehold.co/600x400',
            },
          },
          {
            quantity: 6,
            totalPrice: 120,
            product: {
              id: '3',
              name: 'Almoço Especial',
              price: 20,
              image: 'https://placehold.co/600x400',
            },
          },
        ],
        id: 2,
      },
    ])
  }),
]
