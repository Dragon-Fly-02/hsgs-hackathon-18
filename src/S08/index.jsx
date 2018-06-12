import React from "react";
import S08 from "./lib/S08.js";

import "./index.less";


class Entity extends React.Component{
  render(){
      let array = [];
      for(let i = 0 ; i < this.props._pile.length ; ++ i)
        array.push(<td key={i}>{this.props._pile[i]}</td>);
      for(let i = this.props._pile.length; i < this.props._h; ++ i ) {
        array.push(<td key={i}>0</td>);
      }
      console.log(array);
      return <tr> { array } </tr>;
    }
}
class Board extends React.Component {
  render() {
    let res=this.props.state.res;
    let col=this.props.state.col;
    let h=this.props.state.h;
    let moves = [];
    for( let i=1; i<=h; i++ )
      if(col[i]==='white')
      moves.push(
        <div>
          <button className="buttoncircle1" onClick={() => this.props.move({ x: i})}>
            {i}
          </button>
        </div>
      );
      else
      moves.push(
        <div>
          <button className="buttoncircle2" onClick={() => this.props.move({ x: i})}>
            {i}
          </button>
        </div>
      );
    let err = this.props.error ? this.props.error.message : undefined;
    return (
      <div className="example">
        <p>Có {h} quả bóng, {(h-h%2)/2} trắng, còn lại đen. Hãy xếp chúng vào cột sao cho:<br/>
          +Các bóng lẻ kề nhau.<br/>
          +Các bóng trắng kề nhau.<br/>
          +Số trái cùng gấp đôi số gần trái cùng.<br/>
        </p>
        <button className="khung" onClick={this.props.StartNewGame}> Start a new game (bắt đầu lại) </button>
        <table style={{ border: "2px solid green" }}>
          <tbody>
              <Entity _h={h} _pile={res} />
          </tbody>
        </table>
        <hr />
        <p>Ấn vào các quả bóng ở bên dưới để xếp vào cột</p>
        {moves}
        <pre>{JSON.stringify(this.props.isEnding)}</pre>
        <pre>{JSON.stringify(err)}</pre>
      </div>
    );
  }
}

export default Board;