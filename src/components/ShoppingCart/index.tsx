import { IoCloseCircle } from 'react-icons/io5'
import CartItem from '../CartItem'
import './style.scss'
import { useContext } from 'react'
import { VisualShoppingCartContext } from '../../contexts/VisualShoppingCartContext'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ProductContext } from '../../contexts/ProductContext.tsx'
import { WalletContext } from '../../contexts/WalletContext.tsx'
import { useCheckout } from '../../hooks/useCheckout.ts'

export default function ShoppingCart() {
  const { close, isHidden } = useContext(VisualShoppingCartContext)
  const { totalPrice, items } = useContext(ShoppingCartContext)
  const { wallet } = useContext(WalletContext)
  const { doCheckOut } = useCheckout()
  const { products } = useContext(ProductContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBackgroundClick = (e: any) => {
    if (e.target.classList.contains('shopping-cart__background')) {
      close()
    }
  }

  // todo: use callback
  function handleDoCheckout() {
    if (totalPrice > wallet) {
      alert('Você não tem pontos suficientes para finalziar esta compra :(')
      return
    }
    doCheckOut()
  }

  return (
    <div
      className={`shopping-cart__background ${!isHidden && 'shopping-cart__background--visible'}`}
      onClick={handleBackgroundClick}
    >
      <aside className={`shopping-cart__aside ${isHidden && 'shopping-cart__aside--hidden'}`}>
        {items.length ? (
          <>
            <h2 className="shopping-cart__title">Itens do Carrinho</h2>
            <div className="shopping-cart__itens">
              {items.map((item) => {
                const produto = products.find((product) => product.id === item.id)
                if (produto) {
                  return <CartItem key={produto.id} product={produto} />
                }
                return null
              })}
            </div>

            <hr className="shopping-cart__hr" />

            <div className="shopping-cart__line">
              <span>Total:</span>
              <span>F$ {totalPrice}</span>
            </div>
            <button className="shopping-cart__button" onClick={handleDoCheckout}>
              Confirmar Compra
            </button>
            <button className="shopping-cart__close" onClick={close}>
              <IoCloseCircle />
            </button>
          </>
        ) : (
          <>
            <h2 className="shopping-cart__title">O carrinho está vazio!</h2>
          </>
        )}
      </aside>
    </div>
  )
}
