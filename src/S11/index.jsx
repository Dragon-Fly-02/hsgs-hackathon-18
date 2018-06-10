import React from 'react';
import './index.css';

var divStyle = {
	backgroundImage : `url(${"https://i.imgur.com/cHLFJdn.png"})`
};

function Square(props) {
	return (
		<button className="square" color="green">
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	// this.props.state.N /	this.props.state.board /	this.props.state.step
	constructor(props) {
		super(props);
		this.state = {
			a: 0, b: 0, val: 0,
		}

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeA(event) {
		this.setState({a: event.target.value, b: this.state.b, val: this.state.val});
	}

	handleChangeB(event) {
		this.setState({a: this.state.a, b: event.target.value, val: this.state.val});
	}

	handleChangeC(event) {
		this.setState({a: this.state.a, b: this.state.b, val: event.target.value});
	}

	handleSubmit(event) {
		this.props.giveMoney({A: this.state.a, B: this.state.b, X: this.state.val});
		this.setState({a : 0, b : 0, val : 0});
		event.preventDefault();
	}

	renderEmpty() {
		return <Square
			value = {"Aome game"}
			/>;
	}

	renderSquare(i, j) {
		if(j == 0) {
			++ i;
			return <Square
				value = {'Aome' + i}
			/>;
		}
		return <Square
			value = {this.props.state.board[i + 1][j]}
			/>;
	}

	renderStatus(status) {
		return (<div className="status">{status}</div>);
	}

	renderName(x) {
		return <Square
			value = {'Aome' + x} />
	}

	renderNameRow(n) {
		let buffer = [];
		buffer.push(this.renderEmpty());
		for(let i = 1; i <= n; ++ i) buffer.push(this.renderName(i))
		return (
	        <div className="board-row">
	          {buffer}
	        </div>
		);
	}
	
	renderRow(row, n) {
		let buffer = [];
		for(let i = 0; i <= n; ++i)
			buffer.push(this.renderSquare(row, i));
		return (
			<div className="board-row">
				{buffer}
			</div>
		);
	}

	renderBoard(n) {
		let buffer = [];
		for(let i = 0; i < n; ++i)
			buffer.push(this.renderRow(i, n));
		return buffer;
	}

	render() {
		const isEnded = this.props.isEnding;
		const err = (this.props.error) ? this.props.error.message : null;
		if (isEnded === 'lose') alert("LOSE");
		if (isEnded === 'won')	alert("You won");
		const status = (isEnded === null) 
			? ('Only ' + this.props.state.step + ' moves left!')
			: ((isEnded === "won") ? 'You have Won!' : 'LOSE');

		let error = [];
 	    if (err !== null) error.push(JSON.stringify(err));

		return (
	    <div style={divStyle}>
	    <div>{this.renderStatus(status)}</div>
			<div>{this.renderNameRow(this.props.state.N)}</div>
				{this.renderBoard(this.props.state.N)}

			<div>
			<div style={{color : 'red'}}> {error} </div>
			<form onSubmit={this.handleSubmit}>
        <label>
          First person:
          <input type="number" value={this.state.a} onChange={this.handleChangeA} />
        </label>
				<label>
          Second person:
          <input type="number" value={this.state.b} onChange={this.handleChangeB} />
        </label>
				<label>
          Balance:
          <input type="number" value={this.state.val} onChange={this.handleChangeC} />
        </label>
        <input type="submit" value="Submit" />
      </form> </div>
		<button onClick={() => this.props.undo()}>
			Undo
		</button>
		<button onClick={() => this.props.reset()}>
			Reset 
		</button>	
	      </div>
			);
		}
}

export default Board;