import React from "react";
import Sudoku from "./lib/sudoku.js";
import "./index.less";

class Board extends React.Component {
  render() {
    const board = this.props.state.board;
    const len = board.length;
    const small_len = Math.sqrt(len);
    const err = this.props.error ? this.props.error.message : null;
    let error = [];
    if (err !== null) error.push(JSON.stringify(err));

    const array = [];
    for (let j = 0; j < len; ++j) {
      let subarray = [];
      for (let i = 0; i < len; ++i)
        subarray.push(
          <input
            type="number"
            value={
              board[i][j] === null || board[i][j] > len
                ? ""
                : Math.abs(board[i][j])
            }
            className="square"
            disabled={this.props.isEnding === "won" ? true : board[i][j] < 0}
            min={1}
            max={len}
            onChange={event =>
              this.props.Place({
                x: i,
                y: j,
                val:
                  (parseInt(event.target.valdisabue) > len) |
                  (parseInt(event.target.value) < 1)
                    ? null
                    : parseInt(event.target.value)
              })
            }
          />
        );
      array.push(
        <div className="board-row" key={"line" + j}>
          {subarray}
        </div>
      );
    }
    console.table(board);

    let space = [];
    for (let i = 5; i-- > 0; ) space.push(<br key={"br" + i} />);
    return (
      <div className="n34">
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
