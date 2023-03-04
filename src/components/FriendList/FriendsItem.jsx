import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendsItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={s.status} />

      <span className={isOnline ? s.online : s.ofline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
