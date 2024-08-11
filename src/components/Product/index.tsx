import { Product as ProductType } from '../../../produtos'
import Button from '../Button'
import './style.scss'

type Props = {
  product: ProductType
}

export default function Product({ product }: Props) {
  return (
    <div className="product__base">
      <img src={product.image} alt="" className="product__image" />
      <h2 className="product__name">{product.name}</h2>
      <div className="product_price">
        <small className="product__currency">F$ </small>
        <strong className="product__value">{product.price}</strong>
      </div>
      <Button>Adicionar ao Carrinho</Button>
    </div>
  )
}
