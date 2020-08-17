import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Total from './Components/Total/Total';
import History from './Components/History/History';
import Operation from './Components/Operation/Operation';

class App extends Component {
	state = {
		historyItemCounter: 0,
		transactions: [],
		description: '',
		amount: '',
		income: 0,
		expenses: 0,
		balance: 0,
	};

	addTransaction = (add) => {
		add
			? this.setIncome(this.state.amount)
			: this.setExpenses(this.state.amount);

		const transactions = [
			...this.state.transactions,
			{
				id: this.state.historyItemCounter,
				description: this.state.description,
				amount: +this.state.amount,
				add,
			},
		];

		this.setState(
			(state) => {
				return {
					transactions,
					historyItemCounter: state.historyItemCounter + 1,
				};
			},
			() => console.log(this.state)
		);
	};

	// delTransaction = (id) => {
	// 	const transaction = this.state.transactions.find((elem) => elem.id === id);
	// 	console.log(transaction);
	// };

	addAmount = (e) => {
		this.setState({ amount: e.target.value });
	};

	addDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	calcBalance = () => {
		const diff = this.state.income - this.state.expenses;

		this.setState({
			balance: diff,
			description: '',
			amount: '',
		});
	};

	setIncome = (amount) => {
		this.setState(
			(state) => ({
				income: state.income + +amount,
			}),
			() => this.calcBalance()
		);
	};

	setExpenses = (amount) => {
		this.setState(
			(state) => ({
				expenses: state.expenses + +amount,
			}),
			() => this.calcBalance()
		);
	};

	render() {
		return (
			<>
				<Header />
				<main>
					<div className="container">
						<Total
							balance={this.state.balance}
							income={this.state.income}
							expenses={this.state.expenses}
						/>
						<History
							transactions={this.state.transactions}
							delTransaction={this.delTransaction}
						/>
						<Operation
							addTransaction={this.addTransaction}
							addAmount={this.addAmount}
							addDescription={this.addDescription}
							description={this.state.description}
							amount={this.state.amount}
						/>
					</div>
				</main>
			</>
		);
	}
}

export default App;
