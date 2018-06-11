import React from "react";
import game from "./lib/gamevui.js";

import "./index.css";

class Row extends React.Component{
    render(){
        const array = [];
        for (let i = 0 ; i < this.props.N; ++i)
            array.push(<td key={i} className = "tr">{this.props.pile[i]}</td>);  
        console.log(array);
        return <tr>{array}</tr>;
    }
}
class R extends React.Component{
    render(){
        const array = [ ] ;
        for( let i = 0 ; i < this.props.M;++ i)
            array.push(<td key={i} className = "tr">{this.props.pile[i]}</td>);
        console.log(array);
        return <tr>{array}</tr>;
    }
}
class Board extends React.Component {
    render(){
        let N = this.props.state.piles.length;
        let M = N*N;
        const moves = [];
        for( let i = 1 ; i <= N*N ; ++i){
            moves.push(
                <button className = "note" onClick={() => this.props.move({ pos: i,x: 0,y: 0})}>
                    Move {i}
                </button>
            );
        }
        moves.push(<br/>);
        for( let i = 1 ; i <= N ; ++ i)
            for( let j = 1 ; j <= N ; ++ j)
            moves.push(
                <button className = "note" onClick={() => this.props.move({ pos: 0,x: i,y: j})}>
                    To {i},{j}
                </button>
            ); 
            moves.push(<br/>); 
            moves.push(
                <button className = "note" onClick={() => this.props.move({ pos: 0,x: 0,y: 0})}>
                    UNDO 
                </button>
            );
        const err = this.props.error ? this.props.error.message : null;
        return (
            <div>
            <table style={{ border: "2px solid green" }}>
            <tbody>
                <Row N={N} pile={this.props.state.piles[0]} />
                <Row N={N} pile={this.props.state.piles[1]} />
                <Row N={N} pile={this.props.state.piles[2]} />
                <Row N={N} pile={this.props.state.piles[3]} />
                <R M={M} pile={this.props.state.a} />
                </tbody>
                </table>
            <hr />
            {moves}
            <h1>{JSON.stringify(this.props.isEnding)}</h1>
            <h1>{JSON.stringify(err)}</h1>
            </div>
            );    
        }
    }
export default Board;