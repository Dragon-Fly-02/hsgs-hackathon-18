import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N30/index.jsx";
import Game from "../src/N30/lib/N30.js";
import ReactGame from "react-gameboard/lib/component";

const N30 = ReactGame(Game);

storiesOf("Game N30", module)
  .add("something", () => (
    <N30 N={14} PERCENTAGE={50.0/100.0}>
      <Board />
    </N30>
  ))
