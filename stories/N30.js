import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/N30/index.jsx";
import Game from "../src/N30/lib/N30.js";
import ReactGame from "react-gameboard/lib/component";
<<<<<<< HEAD
=======
import Guide from "../src/N30/guide.jsx";
>>>>>>> upstream/master

const N30 = ReactGame(Game);

storiesOf("N30", module)
  .addDecorator(withKnobs)
<<<<<<< HEAD
  .add("Easy Mode", () => (
=======
  .add("Hướng dẫn", () => <Guide> </Guide>)
  .add("Dễ", () => (
>>>>>>> upstream/master
    <N30 N={4}>
      <Board />
    </N30>
  ))
<<<<<<< HEAD
  .add("Medium Mode", () => (
=======
  .add("Trung bình", () => (
>>>>>>> upstream/master
    <N30 N={6}>
      <Board />
    </N30>
  ))
<<<<<<< HEAD
  .add("Hard Mode", () => (
=======
  .add("Khó", () => (
>>>>>>> upstream/master
    <N30 N={8}>
      <Board />
    </N30>
  ))
<<<<<<< HEAD
  .add("Custom", () => {
=======
  .add("Tùy chọn", () => {
>>>>>>> upstream/master
    const options = {
      range: true,
      step: 1,
      min: 3,
      max: 13
    };
    return (
<<<<<<< HEAD
      <N30 N={number("Size of board", 6, options)}>
=======
      <N30 N={number("Kích cỡ bảng", 6, options)}>
>>>>>>> upstream/master
        <Board />
      </N30>
    );
  });
