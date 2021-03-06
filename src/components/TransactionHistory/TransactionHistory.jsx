import PropTypes from 'prop-types';
import style from './Transaction.module.css';

export const TransactionHistory = props => {
    return (
        <div className={style.container}>
            <table className={style['transaction-history']}>
                <thead className={style.head}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {props.items.map(row => (
                        <tr key={row.id}>
                            <td>{row.type}</td>
                            <td>{row.amount}</td>
                            <td>{row.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ),
};
