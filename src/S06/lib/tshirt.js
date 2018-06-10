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
      for (let j = 1; j < m; ++j) {
        const era = Math.floor(Math.random() * 5);
        if (era < 2) {
          let cant = false;
          for (let k = 0; k < 4; ++k) {
            if (check(i + dx[k], j + dy[k], m, n) && mark[i][j]) cant = true;
          }
          if (!cant) {
            board[i][j] = Math.max(
              board[i][j - 1],
              i > 0 ? board[i - 1][j] : 0
            );
            for (let t = 0; t < j - 1; ++t) {
              const putthis = Math.floor(Math.random() * 2);
              if (putthis === 0) {
                board[i][j] = board[i][t];
                break;
              }
            }
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
    return true;
  },
  isEnding(state) {
    return null;
  }
};

exports.default = Tshirt;
