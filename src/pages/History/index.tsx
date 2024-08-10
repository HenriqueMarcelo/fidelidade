import HistoryItem from '../../components/HistoryItem'
import './styles.scss'

export default function History() {
  return (
    <div className="container history__container">
      <h1 className="history__title">Histórico</h1>
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  )
}
