import React from 'react';

const HistoryItem = ({ transaction, delTransaction }) => {
	const onClick = () => {
		delTransaction(transaction);
	};

	return (
		<li
			className={`history__item ${
				transaction.add ? 'history__item-plus' : 'history__item-minus'
			}`}
		>
			{transaction.description}
			<span className="history__money">
				{`${transaction.add ? '+' : '-'}${transaction.amount}`} ₽
			</span>
			<button className="history__delete" onClick={onClick}>
				x
			</button>
		</li>
	);
};

export default HistoryItem;
