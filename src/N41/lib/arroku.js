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

function Check(x, y, n) {
  if (x >= 0 && x < n && y >= 0 && y < n) return true;
  else return false;
}

const Sudoku = {
  default(props = { size: 3, rate: 2, arrowRate: 2 }) {
    const dx = [-1, 0, 0, 1];
    const dy = [0, -1, 1, 0];
    const size = props.size;
    const rate = props.rate;
    const arrowRate = props.arrowRate;
    const len = Math.floor(size * size);
    let vector = Array.from(new Array(len), (val, index) => index + 1);
    vector = shuffle(vector);
    let board = [];
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        let a = Array.from(vector);
        board.push(a);
        vector = Shift(vector, size);
      }
      vector = Shift(vector, 1);
    }
    for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
        const print = Math.floor(Math.random() * rate);
        board[i][j] = -board[i][j];
        if (print !== 0) board[i][j] = null;
      }
    }

    // let side = ["U", "L", "R", "D"];
    let arrow = [...Array(len)].map(e => Array(len).fill(null));
    for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
        const put = Math.floor(Math.random() * arrowRate);
        if (put !== 0) {
          for (let k = 0; k < 4; ++k) {
            if (
              Check(i + dx[k], j + dy[k], len) &&
              board[i + dx[k]][j + dy[k]] > board[i][j]
            ) {
              arrow[i][j] = k;
              break;
            }
          }
        }
      }
    }
    return { board, arrow };
  },
  actions: {
    async Place(state, { x, y, val }) {
      let board = state.board;
      const arrow = state.arrow;
      const len = board.length;
      if (val === null) return { board };
      if (val < 0 || val > len) throw new Error("invalid");
      board[x][y] = val;
      return { board, arrow };
    },
    async Reset(state) {
      let board = state.board;
      const arrow = state.arrow;
      const len = board.length;
      for (let i = 0; i < len; ++i)
        for (let j = 0; j < len; ++j)
          if (board[i][j] > 0 && board[i][j] <= len) board[i][j] = null;
      return { board, arrow };
    }
  },
  isValid(state) {
    return true;
  },
  isEnding(state) {
    let board = state.board;
    const len = board.length;
    for (let i = 0; i < len; ++i) {
      let mark = Array(len + 1).fill(false);
      for (let j = 0; j < len; ++j) {
        if (!Number.isInteger(board[i][j])) return null;
        let k = Math.abs(board[i][j]);
        if (mark[k]) return null;
        else mark[k] = true;
      }
      for (let k = 1; k <= len; ++k) if (!mark[k]) return null;
    }
    for (let j = 0; j < len; ++j) {
      let mark = Array(len).fill(false);
      for (let i = 0; i < len; ++i) {
        if (!Number.isInteger(board[i][j])) return null;
        let k = Math.abs(board[i][j]);
        if (mark[k]) return null;
        else mark[k] = true;
      }
      for (let k = 1; k <= len; ++k) if (!mark[k]) return null;
    }
    const small_len = Math.floor(Math.sqrt(len));
    for (let i = 0; i < len; i += small_len) {
      for (let j = 0; j < len; j += small_len) {
        let mark = Array(len).fill(false);
        for (let ti = 0; ti < small_len; ++ti) {
          for (let tj = 0; tj < small_len; ++tj) {
            if (!Number.isInteger(board[i + ti][j + tj])) return null;
            let k = Math.abs(board[i + ti][j + tj]);
            if (mark[k]) return null;
            else mark[k] = true;
          }
        }
        for (let k = 1; k <= len; ++k) if (!mark[k]) return null;
      }
    }
    return "won";
  }
};

exports.default = Sudoku;
