import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import Button from '../Button'
import './style.scss'
import { GoHistory } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { VisualShoppingCartContext } from '../../contexts/VisualShoppingCartContext'

export default function Header() {
  const navigate = useNavigate()
  const { open } = useContext(VisualShoppingCartContext)

  return (
    <div className="container header__container">
      <button className="header__logo" onClick={() => navigate('/')}>
        <IoHomeOutline />
        Fidelização
      </button>
      <div className="header__buttons">
        <span className="header-info__base">
          Carteira:
          <span className="header-info__value">F$ 50</span>
        </span>
        <Button onClick={() => navigate('/historico')}>
          <GoHistory />
          Histórico
        </Button>
        <Button info="50" onClick={() => open()}>
          <IoCartOutline />
          Carrinho:
        </Button>
      </div>
    </div>
  )
}
