import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N31/index.jsx";
import Game from "../src/N31/lib/N31.js";
import ReactGame from "react-gameboard/lib/component";

const N31 = ReactGame(Game);

storiesOf("N31", module)
  .addDecorator(withKnobs)
  .add("Easy mode", () => (
    <N31 N={4}>
      <Board/>  
    </N31>
  ))
  .add("Medium mode", () => (
    <N31 N={6}>
      <Board/>  
    </N31>
  ))
  .add("Hard mode", () => (
    <N31 N={8}>
      <Board/>  
    </N31>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 4,
      max: 10
    };
    return (
      <N31 N={number("Size of board", 6, options)}>
        <Board />
      </N31>
    );
  });
