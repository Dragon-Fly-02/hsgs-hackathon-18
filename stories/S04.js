import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/S04/index.jsx";
import Game from "../src/S04/lib/S04.js";

const S04 = ReactGame(Game);

storiesOf("S04", module)
	.add("S04 Game", () => (
		<S04>
			<Paragraph/>
		</S04>
	))
