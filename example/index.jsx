import React from "react";
import TowerOfHanoi from "./lib/tower_of_hanoi.js";

import "./index.css";

class Row extends React.Component {
  render() {
    const array = [];
    for (let id = 0; id < this.props.N; ++id) {
      if (id < this.props.plate.length) {
        array.push(<td key={id}>{this.props.plate[id]}</td>);
      } else {
        array.push(<td key={id}>X</td>);
      }
    }
    console.log(array);
    return <tr>{array}</tr>;
  }
}

class Board extends React.Component {
  render() {
    // Calculate the value of N
    let N = 0;
    for (let i = 0; i < 3; ++i) {
      for (let j of this.props.state.plates[i]) {
        N = Math.max(N, j);
      }
    }
    const moves = [];
    for (let i = 1; i <= 3; ++i)
      for (let j = 1; j <= 3; ++j)
        if (i !== j) {
          moves.push(
            <div>
              <button onClick={() => this.props.move({ x: i, y: j })}>
                Move {i} => {j}
              </button>
            </div>
          );
        }
    return (
      <div>
        <table style={{ border: "1px solid black" }}>
          <tbody>
            <Row N={N} plate={this.props.state.plates[0]} />
            <Row N={N} plate={this.props.state.plates[1]} />
            <Row N={N} plate={this.props.state.plates[2]} />
          </tbody>
        </table>
        <hr />
        {moves}
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default Board;