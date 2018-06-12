import React from "react";
import s51 from "./lib/S51.js";
import "./index.less";

class Square extends React.Component {
  render() {
    let className = "square";
    if (this.props.type == 1) className += " red";
    if (this.props.type == 2) className += " green";
    return (
      <span>
        <button 
          onClick={e => this.props.onClick(e)}
          className = {className}
        >
          {this.props.value == '1'? '⚫': null}
        </button>
      </span>
    );
  }
}

class Board extends React.Component {
  
  handleClick(event, row, col) {
    this.props.move({row: row, col: col});
  }

  handleUndo() {
    if(this.props.state.type[0] != -1) this.props.undo();
    this.props.undo();
    this.props.undo();
  }

  render() {

    if(this.props.state._done == 1) {
      this.props.undo();
      this.props.undo();
      this.props.state._done = 0;
    }

    let N = this.props.state.board.length;
    let M = this.props.state.board[0].length;
    //console.log(N + ' ' + M);
    let arrBoard = [];
    for(let i = 0; i < N; ++i) {
      for(let j = 0; j < M; ++j) {
        arrBoard.push(
          <Square
            type={this.props.state.glow[i][j]}
            value={this.props.state.board[i][j]}
            onClick={e => this.handleClick(e, i, j)}
          />
        );
      }
      arrBoard.push(<br/>);
    }

    const err = this.props.error ? this.props.error.message : null;
    let error = [];
    if (err !== null) error.push(JSON.stringify(err));

    let log = [];
    if (error.length != 0) {
      log.push(<span className="verdict">{error}</span>)
    }

    if (this.props.isEnding == "won" && err == null) {
      log.push(<span className="verdict">{"Tốt lắm! Bạn xứng đáng là Học sinh Giỏi!"}</span>)
    }

    if (this.props.isEnding == "lose" && err == null) {
      log.push(<span className="verdict">{"Tiếc quá! Không còn nước đi nữa rồi!"}</span>)
    }
    
    let result = [];
    result.push(<span></span>);
    if (log.length != 0) {
      result.push(<div className="log">{log}</div>)
    }

    let startGame = true;
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        if (this.props.state.board[i][j] != this.props.state.Oboard[i][j]) {
          startGame = false;
        }
      }
    }

    return (
      <div className="s51">
        <br/><br/>
        {arrBoard}
        <br/>

        <span className="log">
          <button
            className="undo"
            onClick={e => this.handleUndo()}
            disabled={startGame}
          >
            Quay lại
          </button>
        </span>
        <span className="log">
          <button
            className="restart"
            onClick={() => this.props.restart()}
            disabled={startGame}
          >
            Bắt đầu lại
          </button>
        </span>
        <br/><br/>
        {result}
      </div>
    );
  }
}

export default Board;
