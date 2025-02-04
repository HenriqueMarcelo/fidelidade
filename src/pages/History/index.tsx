import { ErrorBanner } from '../../components/ErrorBanner'
import HistoryItem from '../../components/HistoryItem'
import { useHistory } from '../../hooks/useHistory'
import styles from './styles.module.scss'

export default function History() {
  const { histories, error } = useHistory()

  if(error) {
    return  (
      <div className='container'> 
        <ErrorBanner />
      </div>
    )
  }

  return (
    <div className={`container ${styles['history__container']}`}>
      <h1 className={styles['history__title']}>Histórico</h1>
      {histories.map((history) => (
        <HistoryItem history={history} key={history.id} />
      ))}
    </div>
  )
}
