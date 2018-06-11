import React from "react";
import n04 from "./lib/n04.js";
import "./index.less";

// This is a cry for help. I have crippling depression.
// I want VBucks

class Paragraph extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {value1 : '', value2 : ''};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleChange1(event) 
	{
		let K = this.state.value2;
		this.setState({value1 : event.target.value, value2 : K});
	}
	
	async handleChange2(event) 
	{
		let K = this.state.value1;
		this.setState({value1 : K , value2 : event.target.value });
	}
	
	async handleSubmit(event) 
	{
		this.props.move({a : this.state.value1,a1 : this.state.value2});
		event.preventDefault();
	}

	render() 
	{
		let form = [];
		form.push(
		<form onSubmit={this.handleSubmit}>
      <label>	Số học sinh làm bánh: </label>
      <br></br>
      <input type="text" value={this.state.value1} onChange={this.handleChange1} className="cake" />
      <br></br>
      <label> Số học sinh nhảy đường phố: </label>
      <br></br>
      <input type="text" value={this.state.value2} onChange={this.handleChange2} className="dance" />
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
		<div className = "Wrong">
		{err}
		</div>);
		else res.push( 
		<div className = "True">
		{err}
		</div>);
		return (
		<div class = "n04">
      <div className="p1">
			Tại học viện Thánh Roch, cô Darja, thư ký trưởng, đang
			phải đau đầu chuyển đổi tỉ lệ học sinh đăng ký tham gia Tuần lễ hoạt động
			ngoại khóa thành con số thực tế để đưa vào trang thông tin. Bạn hãy giúp cô
			Darja tính ra số học sinh sẽ tham dự. 
			<br></br>
			Không được dùng máy tính hãy giấy viết,
			hãy tính nhẩm trong xem có bao nhiêu học sinh chọn hoạt động làm
			bánh và bao nhiêu học sinh tham gia điệu nhảy đường phố. À và nhớ rằng do trình độ toán cô Darja có hạn 
			nên có thể cô tính nhần tỉ lệ thực tế, do vậy hãy nhớ làm tròn đáp án nhé!
			<br></br>
			Biết rằng trường có tổng cộng {this.props.state.n} học sinh, {this.props.state.x}/{this.props.state.x1} tổng số học sinh tham gia tuần lễ hoạt động ngoại khóa.
			Trong đó, {this.props.state.y}/{this.props.state.y1} số học sinh tranh tài trong cuộc thi làm bánh, {this.props.state.z}/{this.props.state.z1} số học sinh đăng ký nhảy vũ điệu đường phố.
      </div>
	  <pre>{JSON.stringify(this.state)}</pre>
	  <pre>{JSON.stringify(this.props)}</pre>
	  {form}
      {res}
	  </div>
		);
	}
}



export default Paragraph;
