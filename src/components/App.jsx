import Statistics from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Profile } from './ProfileSecond/ProfileContainer';

import friends from '../data/friends.json';
import stat from '../data/data.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics stat={stat} title={'Upload stats'} />
      <Statistics stat={stat} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </div>
  );
};
