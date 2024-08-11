import { AiOutlineDelete } from 'react-icons/ai'
import Button from '../Button'
import './styles.scss'
import { NumberInput } from '../NumberInput'
import { useContext } from 'react'
import { ProductType } from '../../contexts/ProductContext'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

type Props = {
  product: ProductType
}

export default function CartItem({ product }: Props) {
  const { getQuantity, updateQuantity, removeAllItems } = useContext(ShoppingCartContext)
  const itemQuantity = getQuantity(product.id)

  return (
    <div className="cart-item__base">
      <div>
        <img src={product.image} alt="" className="cart-item__image" />
      </div>

      <div className="cart-item__right">
        <h2 className="cart-item__name">
          {product.name}
          <div className="cart-item__price">{product.price} pontos</div>
        </h2>
        <div className="cart-item__buttons">
          <NumberInput value={itemQuantity} onChange={(val) => updateQuantity(product.id, val)} />
          <Button onClick={() => removeAllItems(product.id)}>
            <AiOutlineDelete />
            Remover
          </Button>
        </div>
      </div>
    </div>
  )
}
