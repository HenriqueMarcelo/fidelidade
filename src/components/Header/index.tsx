import { IoCartOutline, IoWalletOutline } from 'react-icons/io5'
import Button from '../Button'
import './style.scss'
import { GoHistory } from 'react-icons/go'

export default function Header() {
  return (
    <div className="container header__container">
      <span className="header__logo">Fidelização</span>
      <div className="header__buttons">
        <span className="header-info__base">
          Carteira:
          <span className="header-info__value">F$ 50</span>
        </span>
        <Button>
          <GoHistory />
          Histórico
        </Button>
        <Button info="50">
          <IoCartOutline />
          Carrinho:
        </Button>
      </div>
    </div>
  )
}
