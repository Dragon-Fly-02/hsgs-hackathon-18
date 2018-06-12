import React from "react";
import { storiesOf } from "@storybook/react";
import Pipe from "../src/S43/index.jsx";
import Game from "../src/S43/lib/Plumber.js";
import ReactGame from "react-gameboard/lib/component";
import { number, withKnobs } from "@storybook/addon-knobs";

const Plumber = ReactGame(Game);

storiesOf("Plumber (S43)", module)
  //.addDecorator(withKnobs)
  .add("Easy", () => (
    <Plumber N = {3} M = {3}>
      <Pipe />
    </Plumber>
  ))
  .add("Normal", () => (
    <Plumber N = {5} M = {7}>
      <Pipe />
    </Plumber>
  ))
  .add("Difficult", () => (
    <Plumber N = {7} M = {9}>
      <Pipe />
    </Plumber>
  ))
  .add("King of Time", () => (
    <Plumber N = {8} M = {10}>
      <Pipe />
    </Plumber>
  ));
  // .add("Custom", () => {
    // const options = {
      // range: true,
      // step: 1,
      // min: 3,
      // max: 8
    // };
    // const n = number("N", 8, options);
    // const m = number("Hint", 8, options);
    // return (
      // <PP N={n} Hint={m}>
        // <BigBoardBuddy />
      // </PP>
    // );
  // });
