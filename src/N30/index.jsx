import React from "react";
import n30 from "./lib/N30.js";
import "./index.less";

function Square(props) {
  return (
    <button 
    className={props.color == 0 ? "square white" : "square black"} 
    onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  render() {
    let N = this.props.state.N;
    let arrBoard = [];

    for (let i = 0; i < N; ++i) {
      arrBoard.push(<br/>)
      for (let j = 0; j < N; ++j) {
        arrBoard.push(
          <Square
            color={this.props.state.displayedColor[i][j]}
            value={this.props.state.displayedValue[i][j]}
            onClick={() => this.props.move({ x: i, y: j })}
          />
        )
      }
    }

    let error = [];
    let end = [];
    const err = this.props.error ? this.props.error.message : null;
    if (err != null) {
<<<<<<< HEAD
      error.push(<span>Invalid move!<br/>Check it again!</span>);
    }
    else if (this.props.isEnding) {
      end.push(<span>GOOD JOB!<br/>YOU ARE NOW A SUPER HERO!</span>)
=======
      error.push(<span>Nước đi không hợp lệ!</span>);
    }
    else if (this.props.isEnding) {
      end.push(<span>QUÁ ĐỈNH!<br/>BẠN LÀ MỘT ANH HÙNG!</span>)
>>>>>>> upstream/master
    }

    return (
      <div className="n30">
        {arrBoard}
        <h1 className="error"> {error} </h1>
        <h1 className="end"> {end} </h1>
      </div>
    );
  }
}

export default Board;
