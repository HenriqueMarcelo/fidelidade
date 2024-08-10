import './styles.scss'

export default function HistoryItem() {
  return (
    <div className="history-item__base">
      <div className="history-item__date">07 de janeiro</div>
      <table className="history-table__table">
        <tr className="history-table__tr">
          <th className="history-table__th">Produto</th>
          <th className="history-table__th">Preço</th>
          <th className="history-table__th">Qtd</th>
          <th className="history-table__th">Total</th>
        </tr>
        <tr className="history-table__tr">
          <td className="history-table__td">Maria Anders</td>
          <td className="history-table__td">F$ 5</td>
          <td className="history-table__td">1</td>
          <td className="history-table__td">F$ 5</td>
        </tr>
        <tr className="history-table__tr">
          <td className="history-table__td">Francisco Chang</td>
          <td className="history-table__td">F$ 6</td>
          <td className="history-table__td">3</td>
          <td className="history-table__td">F$ 18</td>
        </tr>
      </table>
      <div className="history-item__line">
        <span>Total:</span>
        <span>F$ 50</span>
      </div>
    </div>
  )
}
