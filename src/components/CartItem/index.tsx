import { AiOutlineDelete } from 'react-icons/ai'
import Button from '../Button'
import './styles.scss'
import { NumberInput } from '../NumberInput'
import { useState } from 'react'

export default function CartItem() {
  const [val, setVal] = useState(1)
  return (
    <div className="cart-item__base">
      <div>
        <img src="https://placehold.co/600x400" alt="" className="cart-item__image" />
      </div>

      <div className="cart-item__right">
        <h2 className="cart-item__name">
          Nome do produto
          <div className="cart-item__price">F$ 10</div>
        </h2>
        <div className="cart-item__buttons">
          <NumberInput value={val} onChange={setVal} />
          <Button>
            <AiOutlineDelete />
            Remover
          </Button>
        </div>
      </div>
    </div>
  )
}
