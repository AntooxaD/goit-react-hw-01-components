import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

export default function Profile({
    username,
    tag,
    location,
    avatar,
    stats,
    followers,
    views,
    likes,
}) {
    return (
        <div className={style.profile}>
            <div class={style.description}>
                <img src={avatar} alt={username} className={style.avatar} />
                <p className={style.name}>{username}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
};
