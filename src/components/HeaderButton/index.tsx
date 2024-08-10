import './style.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  info?: string
}

export default function HeaderButton({ children, info }: Props) {
  return (
    <button className="header-button__button">
      {children}
      {info && <span className="header-button__value">{info}</span>}
    </button>
  )
}
