import { IoCloseCircle } from 'react-icons/io5'
import CartItem from '../CartItem'
import './style.scss'

export default function ShoppingCart() {
  //   return (
  //     <div className="shopping-cart__background">
  //       <aside className="shopping-cart__aside">
  //         <h2 className="shopping-cart__title">Nenhum item no Carrinho</h2>
  //       </aside>
  //     </div>
  //   )

  return (
    <div className="shopping-cart__background">
      <aside className="shopping-cart__aside">
        <h2 className="shopping-cart__title">Itens do Carrinho</h2>
        <div className="shopping-cart__itens">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <hr className="shopping-cart__hr" />

        <div className="shopping-cart__line">
          <span>Total:</span>
          <span>F$ 50</span>
        </div>
        <button className="shopping-cart__button">Confirmar Compra</button>
        <button className="shopping-cart__close">
          <IoCloseCircle />
        </button>
      </aside>
    </div>
  )
}
