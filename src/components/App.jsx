import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import { FriendListItem } from "./FriendList/FriendListItem";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return ( <div>
    <Profile />
    < Statistics />
<FriendListItem />
<TransactionHistory/>

  </div>
  )
};
