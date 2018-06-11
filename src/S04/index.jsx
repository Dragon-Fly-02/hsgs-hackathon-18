import React from "react";
import S04 from "./lib/S04.js";
import "./index.less";

class Equation extends React.Component {
	render() {
		var boxes=[], operations=['+','-','*','/'], N=this.props.N-1;
		boxes.push(<div>0</div>);
		// N = this.props.N-1 already
		for(let i=0;i<N;i++) {
			if(this.props.oper[i]==-1) {
				boxes.push([<button onClick={() => this.props.changeo({pos: i})}>{this.props.num[i]}</button>]);
			}
			else {
				boxes.push([<button onClick={() => this.props.changeo({pos: i})}>{operations[this.props.oper[i]%4]+this.props.num[i]}</button>]);
			}
			boxes.push([<div>{'----->'+this.props.res[i]}</div>]);
		}
		if(this.props.res[N-1]==this.props.num[N]) boxes.push([<div>Chúc mừng, bạn đã thành công !!! 👏🏼👏🏼👏🏼</div>])
		return <div>{boxes}</div>
	}
}

class Paragraph extends React.Component {
	render() {
		var num=this.props.state.num, oper=this.props.state.oper, N=this.props.state.N, res=this.props.state.res, ans=this.props.state.ans;
		var changeo=this.props.changeo.bind(this);
		var operations=['+','-','*','/'];
		var err=this.props.error ? this.props.error.message : 'NULL';
		return (
			<div class="S04">
				<div>
					<h1>
					Dùng các phép tính cộng, trừ, nhân, chia để tạo ra được kết quả cuối cùng là {num[N-1]}.
					Lưu ý: Khi điều chỉnh số số hạng thì sẽ tạo 1 game mới! <br/>
					Điều chỉnh số số hạng có trong phép tính => 
					<button onClick={() => this.props.inN()} style={{margin: "0px 10px 0px 10px", width: "30px"}}>+</button>
					<button onClick={() => this.props.deN()} style={{margin: "0px 10px 0px 0px", width: "30px"}}>-</button>
					<button onClick={() => this.props.ans()}>Đáp án</button>
					<Equation num={num} oper={oper} N={N} changeo={changeo} res={res}/>
					</h1>
				</div>
			</div>
		);
	}
}

export default Paragraph;