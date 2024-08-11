import './style.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  info?: string
}

export default function Button({ children, info, ...rest }: Props) {
  return (
    <button className="button__button" {...rest}>
      {children}
      {info && <strong className="button__value">{info}</strong>}
    </button>
  )
}
