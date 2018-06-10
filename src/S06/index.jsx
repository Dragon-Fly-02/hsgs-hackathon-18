import React from "react";
import Tshirt from "./lib/tshirt.js";
import "./index.less";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} disabled={props.isOver}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  render() {
    const board = this.props.state.board;
    const N = board.length;
    const M = board[0].length;

    const err = this.props.error ? this.props.error.message : null;

    const array = [];
    for (let j = 0; j < M; ++j) {
      let subarray = [];
      for (let i = 0; i < N; ++i)
        subarray.push(
          <Square
            key={"data" + i + "-" + j}
            isOver={this.props.isEnding}
            onClick={() => this.props.choose({ x: i, y: j })}
          />
        );
      array.push(
        <div className="board-row" key={"line" + j}>
          {subarray}
        </div>
      );
    }

    return <div className="s06">{array}</div>;
  }
}

export default Board;
