import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({
    title, stats
}) {
    return (
        <section className={style.Statistics}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style['stat-list']}>
                {stats.map(stat => {
                    return <li className={style['item']} id={stat.id} key={stat.id} >
                        <span className='label'>{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                })}
            </ul>
        </section >)
}

Statistics.propTypes = {
    stats: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }),
    title: PropTypes.string.isRequired,
}

