"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function generateState(N){
  let step = 100;
  let board = [...Array(N+1)].map(v => Array(N+1).fill(0));
  for (let i = N; i > 0; i--) for (let j = 1; j < i; j++){
    board[i][j] = 1; board[j][i] = -1;
  }
  return {board, step, N};
}

const S11 = {

  default(props = { _N : 4}){
    while (1) return generateState(props._N);
  },

  actions: {

    async giveMoney(state, {A, B, X}) {
      let board = state.board.map(v => v.slice());
      let step = state.step;
      let N = state.N;

      if (A < 1 || A > N || B < 1 || B > N) throw new Error("Invalid Input");
      if (step === 0) throw new Error("Too much step");

      step--;
      board[A][B] -= Number(X); board[B][A] += Number(X);
      return { board, step, N };
    },

    async reset(state){
      let N = state.N;
      return generateState(N);
    }
  },

  isValid(state) {
    let board = state.board.map(v => v.slice());
    let step = state.step;
    let N = state._N;
    for (let i = 1; i <= N; i++) if (board[i][i] !== 0) return false;
    for (let i = 1; i <= N; i++) for (let j = 1; j < i; j++){
      if ((board[i][j] + board[j][i]) !== 0) return false;
    }
    return true;
  },

  isEnding(state) {
    let N = state.N;
    let board = state.board;
    let step = state.step;
    for (let i = 1; i <= N; i++) {
      let sum = 0;
      for (let j = 1; j <= N; j++){
        sum += board[i][j];
      }
      if (sum !== 0){
        if (step === 0) return "lose";
        else return null;
      }
    }
    return "won";
  }
}
exports.default = S11;
