import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    <li clasName={style.item}>
       {isOnline ? (
        <span className={style.status && style['status--online']}>{isOnline}</span>
      ) : (
        <span className={style.status && style['status--offline']}>{isOnline}</span>
      )}
 
  <img classNamee={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p class={style.name}></p>
</li>
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
}
