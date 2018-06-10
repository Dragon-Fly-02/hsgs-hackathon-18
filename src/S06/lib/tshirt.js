"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function check(x, y, m, n) {
  if (x >= 0 && x < n && y >= 0 && y < m) return true;
  return false;
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

const Tshirt = {
  default(props = { m: 6, n: 6 }) {
    // n cot, m hang
    const m = props.m;
    const n = props.n;
    const dx = [-1, 0, 0, 1];
    const dy = [0, -1, 1, 0];
    let board = [];

    let first = Array.from(new Array(m), (val, index) => index + 1);
    first = shuffle(first);

    for (let i = 0; i < n; ++i) {
      let a = first.map(v => v);
      board.push(a);
      first.unshift(first.pop());
    }
    board = shuffle(board);
    console.table(board);

    let mark = [...Array(n)].map(e => Array(m).fill(false));
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        let flag = false;
        for (let t = 0; t < 4; ++t)
          if (check(i + dx[t], j + dy[t], m, n) && mark[i + dx[t]][j + dy[t]]) {
            flag = true;
            break;
          }
        if (!flag) {
          const ran = Math.floor(Math.random() * 3);
          if (ran > 1) {
            board[i][j] = Math.floor(Math.random() * m) + 1;
            mark[i][j] = true;
          }
        }
      }
    }
    console.table(board);
    console.table(mark);

    const selection = [...Array(n)].map(e => Array(m).fill(false));

    return { board, selection };
  },
  actions: {
    async choose(state, { x, y }) {
      const board = state.board;
      let selection = state.selection;
      const n = board.length;
      const m = board[0].length;
      const dx = [-1, 0, 0, 1];
      const dy = [0, -1, 1, 0];

      let cant = false;
      for (let k = 0; k < 4; ++k) {
        if (
          check(x + dx[k], y + dy[k], m, n) &&
          selection[x + dx[k]][y + dy[k]]
        )
          throw new Error("Marked number can't be lined up");
      }

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
    const piles = state.board;
    if (!(piles instanceof Array)) return false;
    for (const pile of piles) if (!(pile instanceof Array)) return false;
    return true;
  },
  isEnding(state) {
    const board = state.board;
    const selection = state.selection;
    const n = board.length;
    const m = board[0].length;
    for (let i = 0; i < n; ++i) {
      let mark = Array(m).fill(false);
      for (let j = 0; j < m; ++j) {
        if (!selection[i][j]) {
          if (mark[board[i][j]]) return null;
          else mark[board[i][j]] = true;
        }
      }
    }
    for (let j = 0; j < m; ++j) {
      let mark = Array(n).fill(false);
      for (let i = 0; i < n; ++i) {
        if (!selection[i][j]) {
          if (mark[board[i][j]]) return null;
          else mark[board[i][j]] = true;
        }
      }
    }
    return "won";
  }
};

exports.default = Tshirt;
