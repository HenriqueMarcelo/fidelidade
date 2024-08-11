import { PurchaseProps } from '../../hooks/useCheckout'
import styles from './styles.module.scss'

type Props = {
  history: PurchaseProps
}

export default function HistoryItem({ history }: Props) {
  // todo: utilizar useMemo
  const dateString = new Date(history.date).toLocaleDateString()

  return (
    <div className={styles['history-item__base']}>
      <div className={styles['history-item__date']}>{dateString}</div>
      {history.items.length && (
        <div className={styles['history-table__base']}>
          <table className={styles['history-table__table']}>
            <thead>
              <tr className={styles['history-table__tr']}>
                <th className={styles['history-table__th']}>Produto</th>
                <th className={styles['history-table__th']}>Preço</th>
                <th className={styles['history-table__th']}>Qtd</th>
                <th className={styles['history-table__th']}>Total</th>
              </tr>
            </thead>
            <tbody>
              {history.items.map((item) => (
                <tr className={styles['history-table__tr']} key={item?.product.id}>
                  <td className={styles['history-table__td']}>{item?.product.name}</td>
                  <td className={styles['history-table__td']}>{item?.product.price} pontos</td>
                  <td className={styles['history-table__td']}>{item?.quantity}</td>
                  <td className={styles['history-table__td']}>{item?.totalPrice} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className={styles['history-item__line']}>
        <span>Total:</span>
        <span>{Number(history.totalPrice)} pontos</span>
      </div>
    </div>
  )
}
