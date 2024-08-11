import HistoryItem from '../../components/HistoryItem'
import { useHistory } from '../../hooks/useHistory'
import './styles.scss'

export default function History() {
  const { histories } = useHistory()

  return (
    <div className="container history__container">
      <h1 className="history__title">Histórico</h1>
      {histories.map((history) => (
        <HistoryItem history={history} key={history.id} />
      ))}
    </div>
  )
}
