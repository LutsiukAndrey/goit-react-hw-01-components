import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.line}>
      <td className={s.value}>{type}</td>
      <td className={s.value}>{amount}</td>
      <td className={s.value}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
