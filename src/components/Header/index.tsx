import { IoCartOutline, IoWalletOutline } from 'react-icons/io5'
import Button from '../Button'
import './style.scss'
import { GoHistory } from 'react-icons/go'

export default function Header() {
  return (
    <div className="container header__container">
      <span className="header__logo">Fidelização</span>
      <div className="header__buttons">
        <Button info="F$ 50">
          <IoWalletOutline />
          Carteira:
        </Button>
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
