// import
import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N36/index.jsx";
import Game from "../src/N36/lib/n36.js";

const N36 = ReactGame(Game); // const N36
    storiesOf("N36",module)
    .addDecorator(withKnobs)
    .add("Easy", () => (
    <N36 Steppassenger = {100} Stepfee = {10} Steptip = {10} Steptoday={10} Steppolish={5} Steppolish_man={10} Steplondon={5} Steplondon_woman={10} Stepalison={5} Stepalison_man={10} Stepitalian={5} >
        <Paragraph />
    </N36>
    ))
    .add("Normal", () => (
        <N36 Steppassenger = {100} Stepfee = {10} Steptip = {10} Steptoday={10} Steppolish={5} Steppolish_man={5} Steplondon={5} Steplondon_woman={5} Stepalison={5} Stepalison_man={5} Stepitalian={5} >
        <Paragraph />
        </N36>
        ))
    .add("Hard", () => (
    <N36 Steppassenger = {100} Stepfee = {5} Steptip = {5} Steptoday={5} Steppolish={5} Steppolish_man={5} Steplondon={5} Steplondon_woman={5} Stepalison={5} Stepalison_man={5} Stepitalian={5} >
        <Paragraph />
    </N36>
    ))
    .add("Impossible", () => (
        <N36 Steppassenger = {100} Stepfee = {1} Steptip = {1} Steptoday={1} Steppolish={1} Steppolish_man={1} Steplondon={1} Steplondon_woman={1} Stepalison={1} Stepalison_man={1} Stepitalian={1} >
            <Paragraph />
        </N36>
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
    const passenger = number("passenger ratio step", 500, options);
    const fee = number("fee ratio step", 50, options1);
    const tip = number("tip ratio step",50, options1);
    const today = number("today ratio step",50, options1);
    const polish = number("polish ratio step",50, options1);
    const polish_man = number("polish_man ratio step",50, options1);
    const london = number("london ratio step", 50, options1);
    const london_woman = number("london_woman ratio step", 50, options1);
    const alison = number("alison ratio step", 50 , options1);
    const alison_man = number("alison_man ratio step", 50 , options1);
    const italian = number("italian ratio step",50, options1);

    return(
        <N36  Steppassenger = {passenger} Stepfee = {fee} Steptip = {tip} Steptoday={today} Steppolish={polish} Steppolish_man={polish_man} Steplondon={london} Steplondon_woman={london_woman} Stepalison={alison} Stepalison_man={alison_man} Stepitalian={italian}>
        <Paragraph />
        </N36>
    );
    });    