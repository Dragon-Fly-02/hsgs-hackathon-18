import React from "react";
import Chess from "./lib/Chess.js";
import "./index.less";
function Square(props)
{
  return(
    <button className={props.value} onClick={props.onClick} disabled={props.isOver} />
  );
}
class Board extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      lang:"Eng",
      help:false,
    }
    this.changelangvi=this.changelangvi.bind(this);
    this.changelangen=this.changelangen.bind(this);
    this.show=this.show.bind(this);
  }
  changelangvi()
  {
    this.setState({lang:"vi"});
  }
  changelangen()
  {
    this.setState({lang:"Eng"});
  }
  show()
  {
    this.setState({help:!this.state.help});
  }
  render() {
    let board = this.props.state.board;
    const n=this.props.state.n;
    const m=this.props.state.m;
    const err = this.props.error ? this.props.error.message : null;
  const array=[];
  for(let i=0;i<n;i++)
  {
    let subarray=[];
    for(let j=0;j<m;j++)
    {
      subarray.push(
        <Square
        key={i*4+j}
        value={this.props.state.board[i][j]}
        isOver={this.props.isEnding}
        onClick={() => this.props.move({x:i,y:j})}
        />
      );
    }
    array.push(<div className='up' key={i}> {subarray}</div>);
  }
  let error= [];
  let err_return;
  if(err==='cell')
  {
    if(this.state.lang==='Eng')
    err_return="You has been to this cell before";
    else
    err_return="Bạn đã từng di chuyển đến ô này";
    error.push(JSON.stringify(err_return));
  }
  else if(err==='invalid')
  {
    if(this.state.lang==='Eng')
    err_return="The horse doesn't move like that";
    else
    err_return="Đó không phải là nước đi của con mã";
    error.push(JSON.stringify(err_return));
  }
  let div_return;
  if(this.state.help)
  {
  if(this.state.lang==="Eng")
  {
    div_return="You must move the knight to all the cells.Each cell must be moved in only one time";
  }
  else
  {
    div_return="Bạn phải di chuyển con mã vào tất cả các ô.Mỗi ô chỉ được đi vào một lần";
  }
  }
  else
  div_return="";
  return(
    <div className="s17-team1">
      <h1><button key="vi" onClick={this.changelangen}>English</button><button onClick={this.changelangvi}>Tiếng Việt </button></h1>
      <h1><button key="help" onClick={this.show}>{this.state.lang==="Eng"?"show help":"hướng dẫn"}</button></h1>
      <button key="reset" onClick={this.props.reset} style={{color:"red"}}> Reset </button>
      <button key="undo" onClick={this.props.undo} disabled={this.props.isEnding} style={{color:"blue"}}>Undo</button>
      <div> {array} </div>
      <h1 style={{color: "red"}}>
        {this.props.isEnding==="won"?"YOU WON":""}
        {this.props.isEnding==="lose"?"YOU LOSE":""}
        </h1>
        <h1 style={{color:"red"}}>
          {error}
          </h1>
          <div>
            {div_return}
            </div>
      </div>
  );
}
}

export default Board;
