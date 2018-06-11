import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N09/index.jsx";
import Game from "../src/N09/lib/N09.js";

const N09 = ReactGame(Game);

storiesOf("N09", module)
	.add("N09 Game", () => (
		<N09>
			<Paragraph/>
		</N09>
	)
)
