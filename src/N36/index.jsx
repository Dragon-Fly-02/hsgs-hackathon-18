import React from "react";
import n36 from "./lib/n36.js";
import "./index.less";

// I love handling stuff manually

class Paragraph extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {value : Array(7).fill('')};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleChange(event) 
	{
		let name = event.target.name;
		let value = event.target.value;
		let K = new Array();
		for(let i = 0; i < 7; i++)
		{
			if(i != name) K[i] = this.state.value[i]; else K[i] = value;
		}
		this.setState({value : K});
	}
	
	async handleSubmit(event) 
	{
		this.props.move({
		a1 : this.state.value[1], 
		a2 : this.state.value[2], 
		a3 : this.state.value[3],
		a4 : this.state.value[4],
		a5 : this.state.value[5],
		a6 : this.state.value[6]});
		event.preventDefault();
	}

	render() 
	{
		let form = [];
		form.push(
		<form onSubmit={this.handleSubmit}>
		<br></br>
  	    <input type="text" value={this.state.value[1]} name = {1} onChange={this.handleChange} className = "form1" placeholder="Tổng lượng khách du lịch"/>
		<br></br>
		<input type="text" value={this.state.value[2]} name = {2} onChange={this.handleChange} className = "form1" placeholder="Số nâng cấp - Polish Tour"/>
		<br></br>
		<input type="text" value={this.state.value[3]} name = {3} onChange={this.handleChange} className = "form1" placeholder="Số nâng cấp - London"/>
		<br></br>
		<input type="text" value={this.state.value[4]} name = {4} onChange={this.handleChange} className = "form1" placeholder="Số nâng cấp - Alison"/>
		<br></br>
		<input type="text" value={this.state.value[5]} name = {5} onChange={this.handleChange} className = "form1" placeholder="Số nâng cấp - Italians"/>
		<br></br>
		<input type="text" value={this.state.value[6]} name = {6} onChange={this.handleChange} className = "form1" placeholder="Tổng tiền Ed nhận"/>
		
		<br></br>
		
		<input  type="submit" value="Submit" className="submit1" />
		</form>
		);	
		
		let err;
		if (this.props.isEnding !== null) 
		{
			err = "Congratulations!";
		} else err = "Guess the right number!";
		let res = [];
		if(this.props.isEnding === null) res.push(
		<div>
		{err}
		</div>);
		else res.push( 
		<div>
		{err}
		</div>);



		return (
   		<div  className="n36">
		  <div>
      		<div className="p1">
	        Du lịch dạo phố London
			<br></br>
			Hướng dẫn viên du lịch Ed Smithers đang dẫn đoàn khách du lịch cùng dạo bộ tham quan khu vực Theaterland ở London.
			Thông thường anh nhận {this.props.state.passenger} khách các vị khách du lịch nếu muốn có thể đóng $ {this.props.state.fee} để mua thêm
			vé coi kịch và nâng cấp vé tham quan của mình.
			Bạn có thể giúp anh chàng Ed tội nghiệp không? Hãy tính tổng lượng khách du lịch và số người đã nâng cấp vé của từng công ty?
			Ngoài ra, Ed còn nhận được thêm $ {this.props.state.tip} tiền boa từ mỗi khách, hãy tính xem số tiền boa Ed được nhận trong 
			hôm nay là bao nhiêu? Biết 
			<ul> 
				<li>Số lượng khách hôm nay chỉ bằng {this.props.state.today} % số lượng khách thường có.</li>
				<li>{this.props.state.polish} % số khách đến từ Polish Tour. Trong đó có {this.props.state.polish_man} % là nam và chỉ khách nam muốn nâng cấp vé</li>
				<li>{this.props.state.london} % số khách đến từ An American In London. Trong đó có {this.props.state.london_woman} % là nữ và không khách nữ nào muốn nâng cấp vé.</li>
				<li>{this.props.state.alison} % tổng số khách đến từ công ty du lịch Alison Moore's Scottish Tours. {this.props.state.alison_man} % là nam và còn lại là nữ. Tất cả khách nữ đều muốn nâng cấp vé.</li>
				<li>{this.props.state.italian} % đến từ công ty Italians Abroad. Tất cả đều là khách nữ và muốn nâng cấp vé.</li>
			</ul>
			{form}
			</div>
			{/*
			<pre>{JSON.stringify(this.props)}</pre>
			<pre>{JSON.stringify(this.state)}</pre>
			*/}
     		{res}
      		</div>
		</div>
		);
	}
}



export default Paragraph;
