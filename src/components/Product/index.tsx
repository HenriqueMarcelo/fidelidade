import { useContext } from 'react'
import { ProductType } from '../../contexts/ProductContext'
import Button from '../Button'
import './style.scss'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { NumberInput } from '../NumberInput'

type Props = {
  product: ProductType
}

export default function Product({ product }: Props) {
  const { addItem, getQuantity, updateQuantity } = useContext(ShoppingCartContext)
  const itemQuantity = getQuantity(product.id)

  return (
    <div className="product__base">
      <img src={product.image} alt="" className="product__image" />
      <h2 className="product__name">{product.name}</h2>
      <div className="product_price">
        <strong className="product__value">{product.price}</strong>
        <small className="product__currency"> pontos</small>
      </div>
      {!itemQuantity ? (
        <Button onClick={() => addItem(product.id)}>Adicionar ao Carrinho</Button>
      ) : (
        <NumberInput value={itemQuantity} onChange={(value) => updateQuantity(product.id, value)} />
      )}
    </div>
  )
}
