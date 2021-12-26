
import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
    return (
        <li className={style.item}>
            {isOnline ? (
                <span className={style['status--online']}>{isOnline}</span>
            ) : (
                <span className={style['status--offline']}>{isOnline}</span>
            )}

            <img
                className={style.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={style.name}>{name}</p>
        </li>
    );
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};
