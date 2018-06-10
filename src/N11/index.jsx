import React from "react";
import "./index.less";

var divStyle = {
  backgroundImage: `url(${"https://i.imgur.com/cHLFJdn.png"})`
};

function Square(props) {
    if (props.style === -1) 
        return <button className="squarenull" />;
    return <button className={"square" + props.style} />;
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
      this.state = {
        a: 0,
        b: 0,
        val: 0
      };
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeB = this.handleChangeB.bind(this);
      this.handleChangeC = this.handleChangeC.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeA(event) {
      this.setState({
        a: event.target.value,
        b: this.state.b,
        val: this.state.val
      });
    }
  
    handleChangeB(event) {
      this.setState({
        a: this.state.a,
        b: event.target.value,
        val: this.state.val
      });
    }
  
    handleChangeC(event) {
      this.setState({
        a: this.state.a,
        b: this.state.b,
        val: event.target.value
      });
    }
  
    handleSubmit(event) {
      this.props.Choose({
        X: this.state.a,
        Y: this.state.b,
        direction: this.state.val
      });
      this.setState({a: 0, b: 0, val: 0 });
      event.preventDefault();
    }
  
    renderSquare(i, j) {
        let isboard = this.props.state.isboard;
        let N = this.props.state.N;
        if (isboard === 0){
            if (check(i, j, N, isboard) !== true) return <Square style={-1} />;
        }
        return <Square style={this.props.state.board[i][j]}/>;
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
      for (let i = 1; i <= n; ++i) buffer.push(this.renderRow(i, n));
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
      }
      let error = [];
      if (err !== null) error.push(JSON.stringify(err));
  
      return (
        <div style={divStyle} className="N11">
            <div> Số cần tìm </div>
            <div> {this.props.state.ans} </div>
            {this.renderStatus(status)}
            {this.renderBoard(this.props.state.N)}
            <div style={{ color: "red" }}> {error} </div>
            <div>
            <form onSubmit={this.handleSubmit}>
              <label class="label">
                X:
                <input
                  type="number"
                  value={this.state.a}
                  onChange={this.handleChangeA}
                />
              </label>
              <label class="label">
                Y:
                <input
                  type="number"
                  value={this.state.b}
                  onChange={this.handleChangeB}
                />
              </label>
              <label class="label">
                Direction:
                <input
                  type="number"
                  Min="0"
                  Max="7"
                  value={this.state.val}
                  onChange={this.handleChangeC}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <button onClick={() => this.props.undo()}>Undo(quay lại)</button>
          <button onClick={() => this.props.StartaNewGame()}>
            Start a new game (bắt đầu lại)
          </button>
        </div>
      );
    }
  }

export default Board;
