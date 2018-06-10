import React from "react";
import Tshirt from "./lib/tshirt.js";
import "./index.less";

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      disabled={props.isOver}
      style={{
        color: props.isChoosen ? "white" : "#00b2cc",
        backgroundColor: props.isChoosen ? "#00e5ff" : "white",
        borderColor: "#00b2cc"
      }}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  render() {
    const board = this.props.state.board;
    const selection = this.props.state.selection;
    const N = board.length;
    const M = board[0].length;

    const error = this.props.error ? this.props.error.message : null;

    const array = [];
    for (let j = 0; j < M; ++j) {
      let subarray = [];
      for (let i = 0; i < N; ++i)
        subarray.push(
          <Square
            key={"data" + i + "-" + j}
            isOver={this.props.isEnding}
            onClick={() => this.props.choose({ x: i, y: j })}
            value={board[i][j]}
            isChoosen={selection[i][j]}
          />
        );
      array.push(
        <div className="board-row" key={"line" + j}>
          {subarray}
        </div>
      );
    }

    return (
      <div className="s06">
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
