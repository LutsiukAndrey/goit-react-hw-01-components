import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';

export const FriendList = ({ friend }) => {
  return (
    <ul className={s.friendList}>
      {friend.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friend: PropTypes.array.isRequired,
};
