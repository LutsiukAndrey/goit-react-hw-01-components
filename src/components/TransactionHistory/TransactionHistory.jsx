import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transaction.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  transaction: PropTypes.array.isRequired,
};
