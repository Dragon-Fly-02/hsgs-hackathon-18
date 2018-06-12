import React from "react";
import Sudoku from "./lib/arroku.js";
import "./index.less";

let lang = "VN";
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: lang === "VN" ? false : true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
    lang = this.state.isToggleOn ? "VN" : "EN";
  }

  render() {
    const board = this.props.state.board;
    const arrow = this.props.state.arrow;
    const len = board.length;
    const small_len = Math.sqrt(len);
    const err = this.props.error ? this.props.error.message : null;
    let error = [];
    if (err !== null) {
      let err_return = null;
      switch (err) {
        case "invalid":
          err_return =
            lang === "VN" ? "Bước đi không hợp lệ!" : "Invalid Move!";
          break;
        default:
          null;
      }
      error.push(JSON.stringify(err_return));
    }

    const array = [];
    for (let j = 0; j < len; ++j) {
      let subarray = [];
      for (let i = 0; i < len; ++i)
        subarray.push(
          <input
            value={
              !board[i][j] || board[i][j] > len ? "" : Math.abs(board[i][j])
            }
            key={"item" + i + j}
            className={"square" + (arrow[i][j] ? " square-arrow" : "")}
            disabled={this.props.isEnding === "won" ? true : board[i][j] < 0}
            min={1}
            max={len}
            style={{
              color: board[i][j] > 0 ? "#FF1493" : "#000",
              borderLeft: "#000 solid " + (i === 0 ? "4px" : "1px"),
              borderRight:
                "#000 solid " + ((i + 1) % small_len === 0 ? "4px" : "1px"),
              borderTop: "#000 solid " + (j === 0 ? "4px" : "1px"),
              borderBottom:
                "#000 solid " + ((j + 1) % small_len === 0 ? "4px" : "1px")
            }}
            onChange={event =>
              this.props.Place({
                x: i,
                y: j,
                val: parseInt(event.target.value)
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

    let space = [];
    for (let i = 5; i-- > 0; ) space.push(<br key={"br" + i} />);
    return (
      <div className="n41">
        <h1 style={{ float: "left" }}>
          {lang === "VN" ? "Top 16 của thầy Mothada" : "Mr.Mothada's Top 16"}
        </h1>

        <label
          style={{ float: "left", marginLeft: "10px", marginTop: "20px" }}
          className="btn"
          onClick={this.handleClick}
        >
          {lang === "VN" ? "English" : "Tiếng Việt"}
        </label>

        <label
          style={{ float: "left", marginLeft: "10px", marginTop: "20px" }}
          className="btn"
          htmlFor="modal-1"
        >
          {lang === "VN" ? "Hướng dẫn chơi" : "How To Play?"}
        </label>

        <label
          style={{ float: "left", marginLeft: "10px", marginTop: "20px" }}
          className="btn"
          onClick={this.props.Reset}
        >
          {lang === "VN" ? "Đặt lại" : "Reset"}
        </label>

        {/* TODO: Help Section */}

        {space}

        <div style={{ float: "left" }}>{array}</div>

        <h1 style={{ color: "red" }} className="msg">
          {error}
        </h1>

        <h1 style={{ color: "green" }} className="msg">
          {this.props.isEnding === "won"
            ? lang === "VN"
              ? "Bạn đã thắng!"
              : "You Won!"
            : ""}
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
