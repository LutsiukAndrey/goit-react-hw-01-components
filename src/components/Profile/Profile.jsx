import user from '../data/user.json';
import s from './Profile.module.css'
import PropTypes from 'prop-types';
const Profile = ()=>{
  
  const {username,tag,location,avatar,stats} = user
    return <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
        width="200px"
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}> {stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}> {stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}> {stats.likes}</span>
      </li>
    </ul>
  </div>
}
Profile.propTypes ={
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.number,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
 }),
}
export default Profile;
