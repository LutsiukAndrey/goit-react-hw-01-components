import transaction from '../data/transactions.json'
import s from './TransactionHistory.module.css'
export const TransactionHistory =()=>{
    return <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className={s.title}>Type</th>
        <th className={s.title}>Amount</th>
        <th className={s.title}>Currency</th>
      </tr>
    </thead>
  {transaction.map(({id,type,amount,currency}) =>(
    <tbody key={id} className={s.tbody}>
      <tr className={s.line}>
        <td className={s.value}>{type}</td>
        <td className={s.value}>{amount}</td>
        <td className={s.value}>{currency}</td>
      </tr>
    </tbody>


  ))}
  </table>
}