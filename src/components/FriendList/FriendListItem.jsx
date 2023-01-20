import friend from '../data/friends.json'
import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';
export const FriendListItem =()=>{
  return <ul className={s.friendList}>

        {friend.map(({avatar, name, isOnline,id})=> (
    <li key={id} className={s.item}>
    <span className={s.status}></span>


    <span className={isOnline ? s.online : s.ofline}>{isOnline}</span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
  </li>

        ))}
  </ul>
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};