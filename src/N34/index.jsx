import React from "react";
import Sudoku from "./lib/sudoku.js";
import "./index.less";

function Square(props) {
  return (
    <input
      className="square"
      onChange={props.onChange}
      disabled={props.isOver || props.value < 0}
    >
      {props.value}
    </input>
  );
}

class Board extends React.Component {
  render() {
    const board = this.props.state.board;
    const len = board.length;
    const err = this.props.error ? this.props.error.message : null;
    let error = [];
    if (err !== null) error.push(JSON.stringify(err));

    const array = [];
    for (let j = 0; j < len; ++j) {
      let subarray = [];
      for (let i = 0; i < len; ++i) {
        subarray.push(
          <Square
            key={"data" + i + "-" + j}
            isOver={this.props.isEnding}
            onChange={() =>
              this.props.choose({
                x: i,
                y: j,
                val: event => {
                  event.target.value;
                }
              })
            }
            value={board[i][j]}
          />
        );
      }
      array.push(
        <div className="board-row" key={"line" + j}>
          {subarray}
        </div>
      );
    }
    let space = [];
    for (let i = 5; i-- > 0; ) space.push(<br key={"br" + i} />);
    return (
      <div>
        <div style={{ float: "left" }}>{array}</div>

        <h1 style={{ color: "red" }} className="msg">
          {error}
        </h1>

        <h1 style={{ color: "green" }} className="msg">
          {this.props.isEnding === "won" ? "YOU WON" : ""}
        </h1>
        <footer className="footer">
          <span> Made with ❤️ by </span>
          <a href="https://gitlab.com/dungwinux">dungwinux</a>
          <span>, </span>
          <a href="https://gitlab.com/kudotuanminh">kudotuanminh</a>
          <span>, </span>
          <a href="https://gitlab.com/DucPr0">DucPr0</a>
          <span>, </span>
          <a href="https://gitlab.com/xmen1404">xmen1404</a>
        </footer>
      </div>
    );
  }
}

export default Board;
