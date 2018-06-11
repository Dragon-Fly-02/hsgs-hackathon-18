import React from "react";
import { storiesOf } from "@storybook/react";
import BigBoardBuddy from "../src/N38/index.jsx";
import Game from "../src/N38/lib/PlusPlus.js";
import ReactGame from "react-gameboard/lib/component";
import { number, withKnobs } from "@storybook/addon-knobs";

const PP = ReactGame(Game);

storiesOf("PlusPlus (N38)", module)
  .addDecorator(withKnobs)
  .add("Easy", () => (
    <PP N = {3} Hint = {4}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Hard", () => (
    <PP N = {4} Hint = {8}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Difficult", () => (
    <PP N = {5} Hint = {12}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("King of Time", () => (
    <PP N = {8} Hint = {32}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 3,
      max: 8
    };
    const n = number("N", 8, options);
    const m = number("Hint", 8, options);
    return (
      <PP N={n} Hint={m}>
        <BigBoardBuddy />
      </PP>
    );
  });
