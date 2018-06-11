import React from "react";
import BigBoard from "./lib/PlusPlus.js";

import "./index.less";

class BigBoardBuddy extends React.Component 
{
	constructor(props) {
		super(props);
		let N = this.props.state.PlayBoard.length;
		this.state = {value : Array(N).fill(Array(N).fill(null))};
		this.handleChange = this.handleChange.bind(this);
	}
	
	async setStateAsync(state) 
	{
		return new Promise(resolve => this.setState(state, resolve));
	}
	
	async handleChange(event)
	{
		let value = event.target.value;
		let name = event.target.name;
		let arr = new Array();
		//let yy = event.target.yy;
		//alert(name);
		//arr[xx][yy] = value;
		let N = this.state.value.length;
		let xx = Math.floor(name / N);
		let yy = name % N;
		for(let i = 0; i < N ; i++)
		{
			arr[i] = new Array();
			for(let j = 0; j < N; j++)
			{
				if(i == xx && j == yy)
				{
					arr[i][j] = value;
				}
				else arr[i][j] = this.state.value[i][j];
			}
		}
		await this.setStateAsync({ value: arr });
		this.props.move({f : this.state.value});
	}
	
	render() 
	{
		let board = [];
		let N = this.props.state.PlayBoard.length;
		for(let i = 0; i < N; i++)
		{
			const r = [];
			for(let j = 0; j < N; j++)
			{
				if(this.props.state.BoolBoard[i][j] == 1)
				{
					r.push(
					<td>
					<div className = "cell normal">{this.props.state.PlayBoard[i][j]}</div>
					</td>);
				}
				else 
				if(this.props.state.GlowBoard[i][j] == 1)
				{
					r.push(
					<td>
						<input className = "cell glowing"
						type = "text"
						value = {this.state.value[i][j]}
						name = {i * N + j}
						onChange = {this.handleChange}
						/>
					</td>
					);
				}
				else
				{
					r.push(
					<td>
						<input className = "cell normal"
						type = "text"
						value = {this.state.value[i][j]}
						name = {i * N + j}
						onChange = {this.handleChange}
						/>
					</td>
					);
				}
			}
			if(this.props.state.SumRow[i] == this.props.state.SumRow1[i]) {
			r.push(
			<td>
			<div className = "sumo right">{this.props.state.SumRow[i]}</div>
			</td>);
			}
			else {
			r.push(
			<td>
			<div className = "sumo wrong">{this.props.state.SumRow[i]}</div>
			</td>);
			}
			board.push(
			<tr>
			{r}
			</tr>
			);
		}
				
		const ar0 = [];
		for(let i = 0 ; i < N ; i++)
		{
			if(this.props.state.SumCol[i] == this.props.state.SumCol1[i]) {
			ar0.push(
			<td>
			<div className = "sumo right">{this.props.state.SumCol[i]}</div>
			</td>);
			}
			else {
			ar0.push(
			<td>
			<div className = "sumo wrong">{this.props.state.SumCol[i]}</div>
			</td>);
			}
		}
		board.push(
		<tr>
		{ar0}
		</tr>
		);
		
		const Mess = [];
		if(this.props.isEnding == "won") Mess.push(
		<div className = "winning">
		Congratulation!
		</div>
		);
		else Mess.push(
		<div className = "notyet">
		Put the numbers in the cells such that :
		<br></br>
		- No two cells have the same value.
		<br></br>
		- The sum of rows are identical to the glowing numbers on the right.
		<br></br>
		- The sum of columns are identical to the glowing numbers at the bottom.
		<br></br>
		</div>
		);
		return (
		<div class = "n38">
		<table>
		{board}
		</table>
		{/*
		<pre>{JSON.stringify(this.props)}</pre>
		<pre>{JSON.stringify(this.state)}</pre>
		*/}
		{/*<button className="restartbutt" onClick={() => this.props.reset()}>
          Click here to die instantly
        </button>*/}
		{Mess}
		</div>
		);
	}
}

export default BigBoardBuddy;
