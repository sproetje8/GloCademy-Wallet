import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form id="form">
				<label>
					<input
						type="text"
						className="operation__fields operation__name"
						placeholder="Наименование операции"
					/>
				</label>
				<label>
					<input
						type="number"
						className="operation__fields operation__amount"
						placeholder="Введите сумму"
					/>
				</label>
				<div className="operation__btns">
					<button
						type="submit"
						className="operation__btn operation__btn-subtract"
					>
						РАСХОД
					</button>
					<button type="submit" className="operation__btn operation__btn-add">
						ДОХОД
					</button>
				</div>
			</form>
		);
	}
}

export default Form;
