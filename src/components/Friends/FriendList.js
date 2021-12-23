import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={style['friend-list']}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
