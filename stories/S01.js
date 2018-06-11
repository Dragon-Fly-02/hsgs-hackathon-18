import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import Board from "../src/S01/index.jsx";
import Game from "../src/S01/lib/S01.js";
import ReactGame from "react-gameboard/lib/component";
<<<<<<< HEAD
=======
import Guide from "../src/S01/guide.jsx";
>>>>>>> upstream/master

const S01 = ReactGame(Game);

storiesOf("S01", module)
  .addDecorator(withKnobs)
<<<<<<< HEAD
  .add("Easy Mode", () => (
=======
  .add("Hướng dẫn", () => <Guide> </Guide>)
  .add("Dễ", () => (
>>>>>>> upstream/master
    <S01 N={4}>
      <Board />
    </S01>
  ))
<<<<<<< HEAD
  .add("Medium Mode", () => (
=======
  .add("Trung bình", () => (
>>>>>>> upstream/master
    <S01 N={5}>
      <Board />
    </S01>
  ))
<<<<<<< HEAD
  .add("Hard Mode", () => (
=======
  .add("Khó", () => (
>>>>>>> upstream/master
    <S01 N={7}>
      <Board />
    </S01>
  ))
<<<<<<< HEAD
  .add("Custom", () => {
=======
  .add("Tùy chọn", () => {
>>>>>>> upstream/master
    const options = {
      range: true,
      step: 1,
      min: 1,
      max: 10
    };
    return (
<<<<<<< HEAD
      <S01 N={number("Size of board", 5, options)}>
=======
      <S01 N={number("Kích cỡ bảng", 5, options)}>
>>>>>>> upstream/master
        <Board />
      </S01>
    );
  });
