import { useContext } from 'react'
import { ProductType } from '../../hooks/useProducts'
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

  //todo: depois de remover todos os itens, começa adicionando 2

  return (
    <div className="product__base">
      <img src={product.image} alt="" className="product__image" />
      <h2 className="product__name">{product.name}</h2>
      <div className="product_price">
        <small className="product__currency">F$ </small>
        <strong className="product__value">{product.price}</strong>
      </div>
      {!itemQuantity ? (
        <Button onClick={() => addItem(product.id)}>Adicionar ao Carrinho</Button>
      ) : (
        <NumberInput value={itemQuantity} onChange={(value) => updateQuantity(product.id, value)} />
      )}
    </div>
  )
}
