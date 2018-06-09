"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

function check(x, y, m, n) {
  if (x >= 0 && x < n && y >= 0 && y < m) return true;
  return false;
}

function shift(og) {
  if (!(og instanceof Array)) return null;
  let k = og;
  let t = k.pop();
  k.unshift(t);
  return k;
}

const Tshirt = {
  default(props = { m: 6, n: 6 }) {
    // n cot, m hang
    const m = props.m;
    const n = props.n;
    let board = [...Array(n)].map(e => Array(m).fill(null));

    //If n < m, we can easily do this (circular message and shuffle). Else, swap them, then just
    //print them as if they are n, m respectively.
    let vector = [];
    for (let i = 1; i <= n; ++i) vector.push(i);

    //Insert elements randomly inside our first row
    let row = [];
    let all = [];
    while (row.length < m) {
      const temp = Math.floor(Math.random() * vector.length);
      row.push(vector[temp]);
      vector.splice(temp);
    }
    //Make all rows by shifting them to the right once.
    for (let i = 0; i < n; ++i) {
      all.push(row);
      row = shift(row);
    }

    //Shuffle them. Same as above, idea is to save all possible positions, pick a random one then
    //erase it from the vector
    let ava = [];
    for (let i = 0; i < n; ++i) ava.push(i);
    let cur = n;
    while (cur > 0) {
      const temp = Math.floor(Math.random() * ava.length);
      board.push(all[ava[temp]]);
      ava.splice(temp);
      --cur;
    }

    //mark stores which spot are considered "broken", if our spot will be broken we store it as
    //a random board[i][k] that k < j. Put it first to board[i][j - 1] to ensure it will be changed to at least
    //1 possible element
    let mark = [...Array(n)].map(e => Array(m).fill(false));
    for (let i = 0; i < n; ++i) {
      for (let j = 1; j < m; ++j) {
        const era = Math.floor(Math.random() * vector.length);
        if (era < 2) {
          let cant = false;
          for (let k = 0; k < 4; ++k)
            if (check(i + dx[k], j + dy[k], m, n) && mark[i + dx[k]][j + dy[k]])
              cant = true;
          if (!cant) {
            board[i][j] = Math.max(
              board[i][j - 1],
              i !== 0 ? board[i - 1][j] : 0
            );
            for (let k = 0; k < j - 1; ++k) {
              const putthis = Math.floor(Math.random() * 2);
              if (putthis === 1) {
                board[i][j] = board[i][k];
                break;
              }
            }
            mark[i][j] = null;
          }
        }
      }
    }

    const selection = [...Array(n)].map(e => Array(m).fill(false));

    return { board, selection };
  },
  actions: {
    async choose(state, { x, y }) {
      const board = state.board;
      let selection = state.selection;
      const n = board.length;
      const m = board[0].length;
      selection[x][y] = !selection[x][y];
      return { board, selection };
    },
    async reset(state) {
      const board = state.board;
      let selection = state.selection;
      const n = board.length;
      const m = board[0].length;
      for (let i = 0; i < n; ++i)
        for (let j = 0; j < m; ++j) if (selection[i][j]) selection = false;
      return { board, selection };
    }
  },
  isValid(state) {
    return true;
  },
  isEnding(state) {
    return null;
  }
};

exports.default = Tshirt;
