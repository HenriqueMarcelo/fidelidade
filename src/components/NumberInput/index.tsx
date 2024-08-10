import { ChangeEvent, InputHTMLAttributes } from 'react'
import './styles.scss'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (customValue: number) => void
}

export function NumberInput({ onChange, value, ...rest }: NumberInputProps) {
  function handleSetCustomValue(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(Number(e.target.value))
    }
  }

  function handleDecreaseValue() {
    if (onChange) {
      onChange(Number(value) - 1)
    }
  }

  function handleIncreaseValue() {
    if (onChange) {
      onChange(Number(value) + 1)
    }
  }

  return (
    <div className="number-input__base">
      <button className="number-input__button" type="button" onClick={handleDecreaseValue}>
        <FiMinus />
      </button>
      <input className="number-input__input" type="number" value={value} onChange={handleSetCustomValue} {...rest} />
      <button className="number-input__button" type="button" onClick={handleIncreaseValue}>
        <FiPlus />
      </button>
    </div>
  )
}
