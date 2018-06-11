import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N34/index.jsx";
import Game from "../src/N34/lib/sudoku.js";
import ReactGame from "react-gameboard/lib/component";

const Sudoku = ReactGame(Game);

storiesOf("Sudoku (N34)", module)
  .addDecorator(withKnobs)
  .add("Normal Mode", () => (
    <Sudoku size={3} rate={2}>
      <Board />
    </Sudoku>
  ))
  .add("Expert Mode", () => (
    <Sudoku size={4} rate={3}>
      <Board />
    </Sudoku>
  ))
  .add("Custom Mode", () => {
    const size_options = {
      range: true,
      step: 1,
      min: 3,
      max: 7
    };
    const rate_options = {
      range: true,
      step: 0.5,
      min: 2,
      max: 10
    };
    const input_size = number("Size", 3, size_options);
    const input_rate = number("AR (1 / AR)", 2, rate_options);
    const size = input_size > 1 ? input_size : 3;
    const rate = input_rate > 1 ? input_rate : 2;
    return (
      <Sudoku size={size} rate={rate}>
        <Board />
      </Sudoku>
    );
  });
