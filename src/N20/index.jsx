import React from "react";
import n20 from "./lib/n20.js";
import "./index.less";

// I love handling stuff manually

class Paragraph extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {value : Array(14).fill('')};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleChange(event) 
	{
		let name = event.target.name;
		let value = event.target.value;
		let K = new Array();
		for(let i = 0; i < 14; i++)
		{
			if(i != name) K[i] = this.state.value[i]; else K[i] = value;
		}
		this.setState({value : K});
	}

	async handleSubmit(event) 
	{
		this.props.move({a1 : this.state.value[1],
		a2 : this.state.value[2],
		a3 : this.state.value[3],
		a4 : this.state.value[4],
		a5 : this.state.value[5],
		a6 : this.state.value[6],
		b1 : this.state.value[7],
		b2 : this.state.value[8],
		b3 : this.state.value[9],
		b4 : this.state.value[10],
		b5 : this.state.value[11],
		b6 : this.state.value[12],
		s: this.state.value[13]});
		event.preventDefault();
	}

	render() 
	{
		// This overly majestic. You can't argue with this. 
		let form = [];
		form.push(
		<form onSubmit={this.handleSubmit}>
		<label className="label1"> <b> Số nhân viên công ty </b></label>
		<br></br>
		<input type="text" value={this.state.value[1]} name = {1} onChange={this.handleChange} className="form1" placeholder="Bánh mì sandwich"  />
		<br></br>
		<input type="text" value={this.state.value[2]} name = {2} onChange={this.handleChange} className="form1" placeholder="Ống sáo và nhạc cụ"/>
		<br></br>
		<input type="text" value={this.state.value[3]} name = {3} onChange={this.handleChange} className="form1" placeholder="Đồ chơi giáo dục" />
		<br></br>
		<input type="text" value={this.state.value[4]} name = {4} onChange={this.handleChange} className="form1" placeholder="Thủ công mỹ nghệ"/>
		<br></br>
		<input type="text" value={this.state.value[5]} name = {5} onChange={this.handleChange}  className="form1" placeholder="Áo khoác"/>
		<br></br>
		<input type="text" value={this.state.value[6]} name = {6} onChange={this.handleChange} className="form1" placeholder="Túi xách" />
		<br></br>
		<label className="label1"> <b> Tổng tiền thu công ty </b> </label>
		<br></br>
		<input type="text" value={this.state.value[7]} name = {7} onChange={this.handleChange} className="form1" placeholder="Bánh mì sandwich"/>
		<br></br>
		<input type="text" value={this.state.value[8]} name = {8} onChange={this.handleChange} className="form1" placeholder="Ống sáo và nhạc cụ"/>
		<br></br>
		<input type="text" value={this.state.value[9]} name = {9} onChange={this.handleChange} className="form1" placeholder="Đồ chơi giáo dục"/>
		<br></br>
		<input type="text" value={this.state.value[10]} name = {10} onChange={this.handleChange} className="form1" placeholder="Thủ công mỹ nghệ"/>
		<br></br>
		<input type="text" value={this.state.value[11]} name = {11} onChange={this.handleChange} className="form1" placeholder="Áo khoác"/>
		<br></br>
		<input type="text" value={this.state.value[12]} name = {12} onChange={this.handleChange} className="form1" placeholder="Túi xách"/>
		<br></br>
		<label className="label1"> <b> Tổng cộng </b> </label>
		<br></br>
		<input type="text" value={this.state.value[13]} name = {13} onChange={this.handleChange} className="form1" placeholder="Tổng số tiền"/>
		<br></br>
		<input  type="submit" value="Submit" className="submit1" />
		</form>
		);	
		let res = [];
		if(this.props.isEnding === null) res.push(
		<div className="p2">
		"Let's try and guess the answer!"
		</div>);
		else res.push( 
		<div className="p2">
		"Congratulations! You have guess the right number!"
		</div>);
		return (
   		<div  className="n20">
		  <div>
      		<div className="p1">
	        Công trường xây dựng Riverrun
			<br></br>
			Khu phức hợp văn phòng Riverrun cần phải sửa chữa. Anh thợ Sony buộc phải thu phí ${this.props.state.money} trên mỗi nhân viên để có chi phí sửa chữa. Bạn hãy giúp Sony tính xem mỗi công ty có tất cả bao nhiêu nhân viên và phải thu tổng cộng bao nhiêu tiền và số tiền tổng kết cuối cùng thu được bao nhiêu làm tròn đến số tự nhiên gần nhất.
			<br></br>
			Sony không có thông tin gì về số lượng nhân viên xác định ngoài dữ liệu dưới đây.
			<p> Có {this.props.state.people} người làm việc tại Riverrum </p>
			<ul>
				<li> {this.props.state.sandwich} % làm việc cho công ty bánh mì sandwich. </li>
				<li> {this.props.state.music} % làm việc cho công ty ống sáo và nhạc cụ. </li>
				<li> {this.props.state.edu} % làm việc cho công ty sản xuất đồ chơi giáo dục. </li>
				<li> {this.props.state.crafts} % làm việc cho công ty hàng thủ công mỹ nghệ. </li>
				<li> {this.props.state.coat} % làm việc cho công ty áo khoác. </li>
				<li> {this.props.state.bag} % làm việc cho công ty sản xuất túi xách </li>
			</ul>
			</div>
			<div className="div1">
				  {form}
			</div>
     		{res}
      		</div>
		</div>
		);
	}
}



export default Paragraph;
