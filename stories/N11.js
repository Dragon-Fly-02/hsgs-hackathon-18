import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../src/N11/index.jsx";
import Game from "../src/N11/lib/N11.js";
import { ReactGame } from "react-gameboard";
import { number, withKnobs } from "@storybook/addon-knobs";
import "../src/N11/index.less";

const N11 = ReactGame(Game);

storiesOf("N11", module)
  .addDecorator(withKnobs)
  .add("How to play", () => (
        <div className = "divs">
            <div> Khi bị lạc vào Sứ Sở Gương, bạn sẽ thấy mọi thứ bị đảo ngược. </div>
            <div> Hãy tìm một số, biết nó xuất hiện dưới dạng đường thẳng liên tục - theo chiều ngang, dọc hoặc chéo, xuôi hoặc ngược </div>
            <div> Các hàng được đánh số từ 1 đến n theo thứ tự trên xuống dưới </div>
            <div> Các cột được đánh số từ 1 đến N theo thứ tự từ trái sang phải </div>
            <div> Nhiệm vụ của bạn là chọn các ô liên tiếp theo thứ tự để được đáp án đúng </div>
            <div> Nếu bạn chọn sai bạn có thể sử dụng Undo để quay lại </div>
        </div>
  ))
  .add("Board", () => (
    <N11 _N={5} isboard={1}>
        <Board />
    </N11>
  ))
  .add("Diamond", () => (
    <N11 _N={5} isboard={0}>
        <Board />
    </N11>    
  ))
  .add("Custom Board", () => {
    const options = {
      range: true,
      step: 2,
      min: 5,
      max: 25
    };
    return (
      <N11 _N={number("Size of board", 7, options)} isboard={1}>
        <Board />
      </N11>
    );
  })
  .add("Custom Diamond", () => {
    const options = {
      range: true,
      step: 2,
      min: 5,
      max: 25
    };
    return (
      <N11 _N={number("Size of Diamond", 7, options)} isboard={0}>
        <Board />
      </N11>
    );
  })
