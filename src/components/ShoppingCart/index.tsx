import { IoCloseCircle } from 'react-icons/io5'
import CartItem from '../CartItem'
import styles from './styles.module.scss'
import { useCallback, useContext } from 'react'
import { VisualShoppingCartContext } from '../../contexts/VisualShoppingCartContext'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ProductContext } from '../../contexts/ProductContext.tsx'
import { WalletContext } from '../../contexts/WalletContext.tsx'
import { useCheckout } from '../../hooks/useCheckout.ts'
import { LoaderContext } from '../../contexts/LoaderContext.tsx'

export default function ShoppingCart() {
  const { close, isHidden } = useContext(VisualShoppingCartContext)
  const { totalPrice, items } = useContext(ShoppingCartContext)
  const { wallet } = useContext(WalletContext)
  const { doCheckOut } = useCheckout()
  const { products } = useContext(ProductContext)
  const { shown } = useContext(LoaderContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBackgroundClick = (e: any) => {
    if (e.target.classList.contains('bg')) {
      close()
    }
  }

  // todo: criar modal
  const handleDoCheckout = useCallback(() => {
    if (totalPrice > wallet) {
      alert('Você não tem pontos suficientes para finalziar esta compra :(')
      return
    }
    doCheckOut()
  }, [doCheckOut, totalPrice, wallet])

  return (
    <div
      className={`bg ${styles['shopping-cart__background']} ${
        !isHidden ? styles['shopping-cart__background--visible'] : ''
      }`}
      onClick={handleBackgroundClick}
    >
      <aside className={`${styles['shopping-cart__aside']} ${isHidden ? styles['shopping-cart__aside--hidden'] : ''}`}>
        {items.length ? (
          <>
            <h2 className={styles['shopping-cart__title']}>Itens do Carrinho</h2>
            <div className={styles['shopping-cart__itens']}>
              {items.map((item) => {
                const produto = products.find((product) => product.id === item.id)
                if (produto) {
                  return <CartItem key={produto.id} product={produto} />
                }
                return null
              })}
            </div>

            <hr className={styles['shopping-cart__hr']} />

            <div className={styles['shopping-cart__line']}>
              <span>Total:</span>
              <span>{totalPrice} pontos</span>
            </div>
            <button className={styles['shopping-cart__button']} onClick={handleDoCheckout} disabled={shown}>
              {shown ? 'Carregando...' : 'Confirmar Compra'}
            </button>
            <button className={styles['shopping-cart__close']} onClick={close}>
              <IoCloseCircle />
            </button>
          </>
        ) : (
          <>
            <h2 className={styles['shopping-cart__title']}>O carrinho está vazio!</h2>
            <button className={styles['shopping-cart__close']} onClick={close}>
              <IoCloseCircle />
            </button>
          </>
        )}
      </aside>
    </div>
  )
}
