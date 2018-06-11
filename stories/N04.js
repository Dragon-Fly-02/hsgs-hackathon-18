import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N04/index.jsx";
import Game from "../src/N04/lib/n04.js";

const N04 = ReactGame(Game); // const N04

storiesOf("N04", module)
  .addDecorator(withKnobs)
  .add("Easy", () => (
    <N04 Stepn = {1000} Stepx = {50} Stepy = {50} Stepz = {50}>
      <Paragraph />
    </N04>
  ))
  .add("Normal", () => (
    <N04 Stepn = {500} Stepx = {20} Stepy = {20} Stepz = {20}>
      <Paragraph />
    </N04>
  ))
  .add("Hard", () => (
    <N04 Stepn = {200} Stepx = {10} Stepy = {10} Stepz = {10}>
      <Paragraph />
    </N04>
  ))
  .add("Impossible", () => (
    <N04 Stepn = {10} Stepx = {5} Stepy = {5} Stepz = {5}>
      <Paragraph />
    </N04>
  ))
  .add("Rinne Tsujikubo", () => (
    <N04 Stepn = {1} Stepx = {1} Stepy = {1} Stepz = {1}>
      <Paragraph />
    </N04>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 100,
      min: 1000, // min of stepn
      max: 10000 // max of stepn
    };
    const options1 = {
        range: true,
        step: 10,
        min: 10 , // min of stepx
        max: 100  // max of stepx
    }
    const n = number("Student's step", 5000, options);
    const x = number("Participant ratio step", 50, options1);
    const y = number("Cake ratio step",50, options1);
    const z = number("Dance ratio step",50, options1);
    return(
        <N04 Stepn={n} Stepx={x} Stepy={y} Stepz={z}>
        <Paragraph />
      </N04>
    );
   });