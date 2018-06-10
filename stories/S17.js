import React from "react";
import { storiesOf } from "@storybook/react";
import Chess from "../src/S17/index.jsx";
import Game from "../src/S17/lib/knight.js";
import ReactGame from "react-gameboard/lib/component";
<<<<<<< HEAD
=======
import { number, withKnobs } from "@storybook/addon-knobs";
>>>>>>> master

const KN = ReactGame(Game);

storiesOf("Knight (S17)", module)
<<<<<<< HEAD
=======
  .addDecorator(withKnobs)
>>>>>>> master
  .add("Easy", () => (
    <KN row={3} col={4}>
      <Chess />
    </KN>
  ))
  .add("Impossible", () => (
    <KN row={8} col={8}>
      <Chess />
    </KN>
<<<<<<< HEAD
  ));
=======
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 4,
      max: 20
    };
    const n = number("Row", 4, options);
    const m = number("Column", 4, options);
    return (
      <KN row={n} col={m}>
        <Chess />
      </KN>
    );
  });
>>>>>>> master
