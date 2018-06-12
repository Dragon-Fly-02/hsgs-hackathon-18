import React from "react";
import BigBoard from "./lib/Plumber.js";

import "./index.less";

class BigBoardBuddy extends React.Component 
{	
	render() 
	{
		let err = this.props.error
      ? this.props.error.message
      : "Let's roll!";
    if (this.props.isEnding !== null) {
      err = "You won!"
    }
		let board = [];
		let N = this.props.state.PlayBoard.length;
		let M = this.props.state.PlayBoard[0].length;
		for(let i = 0; i < N ; i++)
		{
			const r = [];
			for(let j = 0; j < M ; j++)
			{
				if(this.props.state.BoolBoard[i][j] == 1) {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						r.push(
							<td>
							<button className = "button button0-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 1 :
						r.push(
							<td>
							<button className = "button button1-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 2 : 
						r.push(
							<td>
							<button className = "button button2-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 3 : 
						r.push(
							<td>
							<button className = "button button3-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 4 : 
						r.push(
							<td>
							<button className = "button button4-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 5 : 
						r.push(
							<td>
							<button className = "button button5-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 6 : 
						r.push(
							<td>
							<button className = "button button6-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 7 : 
						r.push(
							<td>
							<button className = "button button7-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 8 : 
						r.push(
							<td>
							<button className = "button button8-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 9 : 
						r.push(
							<td>
							<button className = "button button9-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 10 : 
						r.push(
							<td>
							<button className = "button button10-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 11 : 
						r.push(
							<td>
							<button className = "button button11-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 12 : 
						r.push(
							<td>
							<button className = "button button12-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 13 : 
						r.push(
							<td>
							<button className = "button button13-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 14 : 
						r.push(
							<td>
							<button className = "button button14-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 15 : 
						r.push(
							<td>
							<button className = "button button15-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					default :
						;
				}
				} else {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						r.push(
							<td>
							<button className = "button button0-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 1 :
						r.push(
							<td>
							<button className = "button button1-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 2 : 
						r.push(
							<td>
							<button className = "button button2-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 3 : 
						r.push(
							<td>
							<button className = "button button3-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 4 : 
						r.push(
							<td>
							<button className = "button button4-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 5 : 
						r.push(
							<td>
							<button className = "button button5-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 6 : 
						r.push(
							<td>
							<button className = "button button6-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 7 : 
						r.push(
							<td>
							<button className = "button button7-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 8 : 
						r.push(
							<td>
							<button className = "button button8-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 9 : 
						r.push(
							<td>
							<button className = "button button9-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 10 : 
						r.push(
							<td>
							<button className = "button button10-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 11 : 
						r.push(
							<td>
							<button className = "button button11-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 12 : 
						r.push(
							<td>
							<button className = "button button12-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 13 : 
						r.push(
							<td>
							<button className = "button button13-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 14 : 
						r.push(
							<td>
							<button className = "button button14-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					case 15 : 
						r.push(
							<td>
							<button className = "button button15-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
							</td>
						);
						break;
					default :
						;
				}
				}
			}
			board.push(
			<tr>
			{r}
			</tr>);
		}
		return (
		<div class = "s43">
		<table>
		{board}
		</table>
		<pre>{JSON.stringify(err)}</pre>
		</div>
		);
	}
}

export default BigBoardBuddy;
