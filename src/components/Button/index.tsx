import styles from './styles.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  info?: string
}

export default function Button({ children, info, ...rest }: Props) {
  return (
    <button className={styles['button__button']} {...rest}>
      {children}
      {info && (
        <strong className={styles['button__value']} data-testid="info">
          {info}
        </strong>
      )}
    </button>
  )
}
