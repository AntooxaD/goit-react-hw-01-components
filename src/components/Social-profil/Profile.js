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
        <div classNamme={style.profile}>
            <div class={style.description}>
                <img src={avatar} alt={username} class="avatar" />
                <p class="name">Petra Marica</p>
                <p class="tag">@pmarica</p>
                <p class="location">Salvador, Brasil</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
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
    stats: PropTypes.objectOf(PropTypes.number),
};
