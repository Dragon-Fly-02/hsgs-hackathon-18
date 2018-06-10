import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../N09/index.jsx";
import Game from "../N09/lib/N09.js";
import ReactGame from "react-gameboard/lib/component";

const TOH = ReactGame(Game);

storiesOf("N09", module)
	.add("Default", () => (
		<TOH>
			<Board/>
		</TOH>
	))
