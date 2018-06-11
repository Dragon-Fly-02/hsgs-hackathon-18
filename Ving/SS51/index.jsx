import React from "react";
import s51 from "./lib/S51.js";
import "./index.less";

const dir = [[-2, 0], [2, 0], [0, -2], [0, 2]];

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
  constructor(props) {
    super(props);
    this.state = {
      glow: Array(10).fill(Array(10).fill(0)),
      err: 1, cnt: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  reset(N, M, glow) {
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < M; ++j) {
        glow[i][j] = 0;
      }
    }
  }

  handleUndo() {
    if (this.state.cnt == 0) return;

    let N = this.props.state.board.length;
    let M = this.props.state.board[0].length;
    let glow = this.state.glow.map(v => v.slice());
    let cnt = this.state.cnt;
   
    this.reset(N, M, glow);
    this.setState({glow: glow, err: 1, cnt: cnt - 1});
    
    this.props.undo();
  }
  
  handleClick(event, r, c) {
    let N = this.props.state.board.length;
    let M = this.props.state.board[0].length;
    let glow = this.state.glow.map(v => v.slice());

    if (this.props.state.board[r][c] == 0) {
      let r1 = -1, c1 = -1;
      for (let i = 0; i < N; ++i) {
        for (let j = 0; j < M; ++j) {
          if (glow[i][j] == 1) {
            r1 = i, c1 = j;
          }
        }
      }

      let err = 0;
      if (r1 == -1 && c1 == -1) err = 1;
      else if (glow[r][c] != 2) err = 1;

      let cnt = this.state.cnt;

      this.props.move({r1: r1, c1: c1, r2: r, c2: c, err: err});
      if (err == 0) {
        ++cnt, this.reset(N, M, glow);
      }
      
      this.setState({glow: glow, err: 1, cnt: cnt});
      return;
    }

    this.reset(N, M, glow);

    glow[r][c] = 1;
    for(let i = 0; i < 4; ++i) {
      let x1 = r + dir[i][0];
      let y1 = c + dir[i][1];
      if(x1 >= N || y1 >= M || x1 < 0 || y1 < 0) continue;
      let x2 = r + dir[i][0] / 2;
      let y2 = c + dir[i][1] / 2;
      if(this.props.state.board[x1][y1] == 1) continue;
      if(this.props.state.board[x2][y2] == 0) continue;
      glow[x1][y1] = 2;
    }

    this.setState({glow: glow, err: 0});
  }

  render() {
    let N = this.props.state.board.length;
    let M = this.props.state.board[0].length;
    let arrBoard = [];

    for(let i = 0; i < N; ++i) {
      for(let j = 0; j < M; ++j) {
        arrBoard.push(
          <Square
            type={this.state.glow[i][j]}
            value={this.props.state.board[i][j]}
            onClick={e => this.handleClick(e, i, j)}
          />
        );
      }
      arrBoard.push(<br/>);
    }

    const err = (this.props.error && this.state.err == 1) ? this.props.error.message : null;
    let error = [];
    if (err !== null) error.push(JSON.stringify(err));

    let log = [];
    if (error.length != 0) {
      log.push(<span>{error}</span>);
    }

    if (this.props.isEnding == "won" && err == null) {
      log.push(<span>{"Giỏi!"}</span>);
    }

    if (this.props.isEnding == "lose" && err == null) {
      log.push(<span>{"Gà!"}</span>);
    }
    
    let result = [];
    result.push(<span></span>);
    if (log.length != 0) {
      result.push(<div>{log}</div>);
    }

    return (
      <div className="s51">
        <h1> S51 </h1>
        {arrBoard}
        <br/>
          <button onClick={e => this.handleUndo()}>
            Undo
          </button>
        <br/>
        {result}
      </div>
    );
  }
}

export default Board;
