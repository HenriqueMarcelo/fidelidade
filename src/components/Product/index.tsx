import { useContext } from 'react'
import { ProductType } from '../../contexts/ProductContext'
import Button from '../Button'
import styles from './styles.module.scss'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { NumberInput } from '../NumberInput'

type Props = {
  product: ProductType
}

export default function Product({ product }: Props) {
  const { addItem, getQuantity, updateQuantity } = useContext(ShoppingCartContext)
  const itemQuantity = getQuantity(product.id)

  return (
    <div className={styles['product__base']}>
      <img src={product.image} alt="" className={styles['product__image']} />
      <h2 className={styles['product__name']}>{product.name}</h2>
      <div className={styles['product_price']}>
        <strong className={styles['product__value']}>{product.price}</strong>
        <small className={styles['product__currency']}> pontos</small>
      </div>
      {!itemQuantity ? (
        <Button onClick={() => addItem(product.id)}>Adicionar ao Carrinho</Button>
      ) : (
        <NumberInput value={itemQuantity} onChange={(value) => updateQuantity(product.id, value)} />
      )}
    </div>
  )
}
