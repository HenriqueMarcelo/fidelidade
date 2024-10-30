import { FiAlertTriangle } from 'react-icons/fi'
import styles from './styles.module.scss'

type Props = {
  message?: string
}

export function ErrorBanner({ message = 'Algo deu errado, tente novamente mais tarde.' }: Props) {
  return (
    <div role="alert" className={styles['error__container']}>
      <FiAlertTriangle /> {message}
    </div>
  )
}
