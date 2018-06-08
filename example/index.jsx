import React from "react";
import TowerOfHanoi from "./lib/tower_of_hanoi.js";

import "./index.css";

class Row extends React.Component {
  render() {
    const array = [];
    for (let id = this.props.N - 1; id >= 0; --id) {
      if (id < this.props.pile.length) {
        array.push(<td key={id}>{this.props.pile[id]}</td>);
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
    let N = this.props.state.piles[0].length;
    /*for (let i = 0; i < 3; ++i) {
      for (let j of this.props.state.piles[i]) {
        N = Math.max(N, j);
      }
    }*/
    const moves = [];
    for (let i = 1; i <= 4; ++i)
      for (let j = i+1; j <= 4; ++j) {
        if(i != j){
          moves.push(
            <div>
              <button onClick={() => alert('click làm méo gì')}>
                Move {i} => {j}
              </button>
              
              <button onClick={() => alert('click làm méo gì')}>
                Move {j} => {i}
              </button>
            </div>
          );
        }
      }
    //const err = this.props.error ? this.props.error.message : null;
    return (
      <div>
        <table style={{ border: "1px solid black" }}>
          <tbody>
            <Row N={N} pile={this.props.state.piles[0]} />
            <Row N={N} pile={this.props.state.piles[1]} />
            <Row N={N} pile={this.props.state.piles[2]} />
            <Row N={N} pile={this.props.state.piles[3]} />
          </tbody>
        </table>
        <hr />
        {moves}
      </div>
    );
  }
}

export default Board;
