import { IoCloseCircle } from 'react-icons/io5'
import CartItem from '../CartItem'
import './style.scss'
import { useContext } from 'react'
import { VisualShoppingCartContext } from '../../contexts/VisualShoppingCartContext'

export default function ShoppingCart() {
  const { close, isHidden } = useContext(VisualShoppingCartContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBackgroundClick = (e: any) => {
    if (e.target.classList.contains('shopping-cart__background')) {
      close()
    }
  }

  return (
    <div
      className={`shopping-cart__background ${!isHidden && 'shopping-cart__background--visible'}`}
      onClick={handleBackgroundClick}
    >
      <aside className={`shopping-cart__aside ${isHidden && 'shopping-cart__aside--hidden'}`}>
        <h2 className="shopping-cart__title">Itens do Carrinho</h2>
        <div className="shopping-cart__itens">
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
        <button className="shopping-cart__close" onClick={close}>
          <IoCloseCircle />
        </button>
      </aside>
    </div>
  )
}
