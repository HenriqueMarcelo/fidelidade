import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import Button from '../Button'
import styles from './styles.module.scss'
import { GoHistory } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { VisualShoppingCartContext } from '../../contexts/VisualShoppingCartContext'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { WalletContext } from '../../contexts/WalletContext'
import { LoaderLine } from '../LoaderLine'
import { LoaderContext } from '../../contexts/LoaderContext'

export default function Header() {
  const navigate = useNavigate()
  const { open } = useContext(VisualShoppingCartContext)
  const { items } = useContext(ShoppingCartContext)
  const { wallet } = useContext(WalletContext)
  const { shown } = useContext(LoaderContext)

  return (
    <>
      {shown && <LoaderLine />}
      <div className={`container ${styles['header__container']}`}>
        <div className={styles['header__left']}>
          <button className={styles['header__logo']} onClick={() => navigate('/')}>
            <IoHomeOutline />
            Fidelização
          </button>
          <div className={styles['header--mobile']}>
            <Button onClick={() => navigate('/historico')}>
              <GoHistory />
              Histórico
            </Button>
            <Button info={String(items.length)} onClick={() => open()}>
              <IoCartOutline />
              Carrinho:
            </Button>
          </div>
        </div>
        <div className={styles['header__right']}>
          <span className={styles['header-info__base']}>
            Carteira:
            <span className={styles['header-info__value']}>{wallet} pontos</span>
          </span>
          <Button onClick={() => navigate('/historico')}>
            <GoHistory />
            Histórico
          </Button>
          <Button info={String(items.length)} onClick={() => open()}>
            <IoCartOutline />
            Carrinho:
          </Button>
        </div>
      </div>
    </>
  )
}
