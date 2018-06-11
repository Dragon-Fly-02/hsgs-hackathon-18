import React from "react";
import "./index.less";

var divStyle = {
  backgroundImage: `url(${"https://i.imgur.com/cHLFJdn.png"})`
};

function Square(props) {
    let S = ((props.value === true) ? "color" : "");
    if (props.style === -1) 
        return <button className="squarenull" OnClick = {props.onClick} />;
    return <button className={"square" + S + props.style} 
                  onClick = {props.onClick}
            />;
}

function check(x, y, N, isboard){
    if (x < 1 || x > N || y < 1 || y > N) return false;
    if (isboard !== 1){
        if (x + y > (3 * N + 1) / 2 || x + y < (N + 3) / 2) return false;
        if (x - y > (N - 1) / 2 || x - y < (1 - N) / 2) return false;
    }
    return true;
}

class Board extends React.Component {
    constructor(props) {
      super(props);
    }
  
    renderSquare(i, j) {
        let isboard = this.props.state.isboard;
        let N = this.props.state.N;
        let val = false;
        for (let k = 0; k < this.props.state.res.length; k++){
          if (i == this.props.state.chosenx[k] && j == this.props.state.choseny[k]) val = true;
        }
        if (isboard === 0){
            if (check(i, j, N, isboard) !== true) 
            return <Square style={-1} 
                        onClick={() => this.props.move({X : i, Y : j})} 
                        value={val}
                    />;
        }
        return <Square 
              style={this.props.state.board[i][j]} 
              onClick={() => this.props.move({X : i, Y : j})}
              value={val}
              />;
    }
  
    renderStatus(status) {
      return <div className="status">{status}</div>;
    }
  
    renderRow(row, n) {
      let buffer = [];
      for (let i = 1; i <= n; ++i) buffer.push(this.renderSquare(row, i));
      return <div className="board-row">{buffer}</div>;
    }
  
    renderBoard(n) {
      let buffer = [];
      for (let i = 1; i <= n; ++i) {
        buffer.push(this.renderRow(i, n));
      }
        return buffer;
    }
  
    render() {
      const isEnded = this.props.isEnding;
      const err = this.props.error ? this.props.error.message : null;
      let status = []; 
      if (isEnded == "won") {
        status.push(<div className="star">⋆⋆⋆</div>);
        status.push(<div style={{ color: "green" }}>Accepted. Bạn thắng.</div>);
      } else if (isEnded == "lose") {
        status.push(<div>LOSE. Bạn thua</div>);
        let res = "Bạn tìm được " + this.props.state.res + ". Số cần tìm là " + this.props.state.ans;
        status.push(<div>{res}</div>);
      }
      else{
        status.push(<div> Số cần tìm </div>);
        status.push(<div> {this.props.state.ans} </div>);
      }
      let error = [];
      if (err !== null) error.push(JSON.stringify(err));
      
      return (
        <div style={divStyle} className="N11">
            {this.renderStatus(status)}
            {this.renderBoard(this.props.state.N)}
            <div style={{ color: "red" }}> {error} </div>
          <button onClick={() => this.props.undo()}>Undo(quay lại)</button>
          <button onClick={() => this.props.StartaNewGame()}>
            Start a new game (bắt đầu lại)
          </button>
        </div>
      );
    }
  }

export default Board;
