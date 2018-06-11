"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function Shift(a, n) {
  for (let i = 0; i < n; ++i) a.unshift(a.pop());
  return a;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const Sudoku = {
  default(props = { size: 3, rate }) {
    const size = props.size;
    const len = size * size;
    let vector = Array.from(new Array(len), (val, index) => index + 1);
    let board = [];
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        board.push(vector);
        vector = Shift(vector, temp);
      }
      vector = Shift(vector, 1);
    }
    for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
        let print = Math.floor(Math.random() * rate);
        if (print === 0) board[i][j] = -board[i][j];
        else board[i][j] = null;
      }
    }
    return { board };
  },
  actions: {
    async Place(state, { x, y, val }) {
      let board = state.board;
      if (board[x][y] < 0) throw new Error("Invalid move!");
      board[x][y] = val;
      return { board };
    },
    async Reset(state) {
      let board = state.board;
      if (board[x][y] > 0) board[x][y] = null;
      return { board };
    }
  },
  isValid(state) {
    return true;
  },
  isEnding(state) {
    const board = state.board;
    const len = board.length;
    for (let i = 0; i < len; ++i) {
      let mark = Array(len).fill(false);
      for (let j = 0; j < len; ++j)
        if (mark[board[i][j]]) return null;
        else mark[board[i][j]] = true;
    }
    for (let j = 0; j < len; ++j) {
      let mark = Array(len).fill(false);
      for (let i = 0; i < len; ++i)
        if (mark[board[i][j]]) return null;
        else mark[board[i][j]] = true;
    }
    const small_len = Math.floor(Math.sqrt(len));
    for (let i = 0; i < len; i += small_len) {
      for (let j = 0; j < len; j += small_len) {
        let mark = Array(len).fill(false);
        for (let ti = 0; ti < len; ++ti) {
          for (let tj = 0; tj < len; ++tj) {
            if (mark[[i + ti][j + tj]]) return null;
            else mark[[i + ti][j + tj]] = true;
          }
        }
      }
    }
    return "won";
  }
};

exports.default = Sudoku;
