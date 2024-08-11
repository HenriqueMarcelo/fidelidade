import { useEffect, useState } from 'react'
import HistoryItem from '../../components/HistoryItem'
import { useHistory } from '../../hooks/useHistory'
import './styles.scss'
import { PurchaseProps } from '../../hooks/useCheckout'

export default function History() {
  const [histories, setHistories] = useState<PurchaseProps[]>([])
  const { fetchHistory } = useHistory()

  // todo: utilizar hook do Router
  useEffect(() => {
    async function aux() {
      const response = await fetchHistory()
      setHistories(response)
    }
    aux()
  })

  return (
    <div className="container history__container">
      <h1 className="history__title">Histórico</h1>
      {histories.map((history) => (
        <HistoryItem history={history} key={history.id} />
      ))}
    </div>
  )
}
