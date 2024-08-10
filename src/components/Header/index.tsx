import { IoCartOutline, IoWalletOutline } from 'react-icons/io5'
import HeaderButton from '../HeaderButton'
import './style.scss'
import { GoHistory } from 'react-icons/go'

export default function Header() {
  return (
    <div className="container header__container">
      <span className="header__logo">Fidelização</span>
      <div className="header__buttons">
        <HeaderButton info="F$ 50">
          <IoWalletOutline />
          Carteira:
        </HeaderButton>
        <HeaderButton>
          <GoHistory />
          Histórico
        </HeaderButton>
        <HeaderButton info="50">
          <IoCartOutline />
          Carrinho:
        </HeaderButton>
      </div>
    </div>
  )
}
