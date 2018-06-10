import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N13/index.jsx";
import Game from "../src/N13/lib/N13.js";
import ReactGame from "react-gameboard/lib/component";

const N13 = ReactGame(Game);

storiesOf("N13", module)
  .addDecorator(withKnobs)
  .add("Easy mode", () => (
    <N13 N={4}>
      <Board/>  
    </N13>
  ))
