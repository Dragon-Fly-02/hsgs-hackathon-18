import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N30/index.jsx";
import Game from "../src/N30/lib/N30.js";
import ReactGame from "react-gameboard/lib/component";

const N30 = ReactGame(Game);

storiesOf("N30", module)
  .addDecorator(withKnobs)
  .add("Easy Mode", () => (
    <N30 N={4}>
      <Board />
    </N30>
  ))
  .add("Medium Mode", () => (
    <N30 N={6}>
      <Board />
    </N30>
  ))
  .add("Hard Mode", () => (
    <N30 N={8}>
      <Board />
    </N30>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 3,
      max: 13
    };
    return (
      <N30 N={number("Size of board", 6, options)}>
        <Board />
      </N30>
    );
  });
