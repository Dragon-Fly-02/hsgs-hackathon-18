import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../src/S11/index.jsx";
import Game from "../src/S11/lib/S11.js";
import {ReactGame} from "react-gameboard";
import { number, withKnobs } from "@storybook/addon-knobs";

const S11 = ReactGame(Game);

storiesOf("Aome vô địch", module)
  .addDecorator(withKnobs)
  .add("with default props", () => (
    <S11 _N={6}>
      <Board />
    </S11>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 1,
      max: 10
    };
    return (
      <S11 _N={number("Size of board", 5, options)}>
        <Board />
      </S11>
    );
  });

