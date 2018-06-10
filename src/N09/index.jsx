import React from "react";
import N09 from "./lib/N09.js";
import "./index.css";

class Equation extends React.Component {
	render() {
		var boxes=[], operations=['+','-','*','/'], N=this.props.N-1;
		boxes.push(<div>0</div>);
		// N = this.props.N-1 already
		for(let i=0;i<N;i++) {
			boxes.push([<button onClick={() => this.props.changeo({pos: i})}>{operations[this.props.oper[i]%4]+this.props.num[i]}</button>]);
			boxes.push([<div>{'----->'+this.props.res[i]}</div>]);
		}
		if(this.props.res[N-1]==this.props.num[N]) boxes.push([<div>CONGRATZ, YOU HAVE DONE IT!!!</div>])
		return <div>{boxes}</div>
	}
}

class Board extends React.Component {
	render() {
		var num=this.props.state.num, oper=this.props.state.oper, N=this.props.state.N, res=this.props.state.res;
		var changeo=this.props.changeo.bind(this);
		var operations=['+','-','*','/'];
		var err=this.props.error ? this.props.error.message : 'NULL';
		return (
			<div>
				<div class="container">
					<h1>
					Adjust number of numbers
					<button onClick={() => this.props.inN()} style={{margin: "auto"}}>+</button>
					<button onClick={() => this.props.deN()} style={{margin: "auto"}}>-</button>
					<Equation num={num} oper={oper} N={N} changeo={changeo} res={res}/>
					</h1>
				</div>
				<pre>{JSON.stringify(this.props)}</pre>
				<pre>{JSON.stringify(err)}</pre>
			</div>
		);
	}
}

export default Board;