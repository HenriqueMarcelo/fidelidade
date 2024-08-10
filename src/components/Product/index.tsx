import Button from '../Button'
import './style.scss'

export default function Product() {
  return (
    <div className="product__base">
      <img src="https://placehold.co/600x400" alt="" className="product__image" />
      <h2 className="product__name">Nome do produto</h2>
      <div className="product_price">
        <small className="product__currency">F$ </small>
        <strong className="product__value">7</strong>
      </div>
      <Button>Adicionar ao Carrinho</Button>
    </div>
  )
}
