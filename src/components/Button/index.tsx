import './style.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  info?: string
}

export default function Button({ children, info }: Props) {
  return (
    <button className="button__button">
      {children}
      {info && <span className="button__value">{info}</span>}
    </button>
  )
}
