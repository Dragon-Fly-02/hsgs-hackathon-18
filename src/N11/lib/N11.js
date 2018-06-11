"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function check(x, y, N, isboard){
    if (x < 1 || x > N || y < 1 || y > N) return false;
    if (isboard !== 1){
        if (x + y > (3 * N + 1) / 2 || x + y < (N + 3) / 2) return false;
        if (x - y > (N - 1) / 2 || x - y < (1 - N) / 2) return false;
    }
    return true;
};

function generateState(N, isboard){
    let board = [...Array(N+5)].map(v => Array(N+5).fill(0));
    for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++){
        board[i][j] = Math.floor(Math.random() * 10);
    }
    let length = Math.floor(Math.random() * 3) + (N-3) / 2;
    let direction = Math.floor(Math.random() * 8);
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let X = [], Y = [];
    let ans = "";
    let res = "";
    for (let i = 1; i <= N; i++) for (let j = 1; j <= N; j++){
        if (check(i, j, N, isboard) === true && 
            check(  i+Number(dx[direction]*(length-1)), 
                    j+Number(dy[direction]*(length-1)), 
                    N, isboard) === true)
            X.push(i), Y.push(j);
    }
    let a = Math.floor(Math.random() * X.length), x = X[a], y = Y[a];
    for (let i = 0; i < length; i++){
        ans = ans + board[x+dx[direction]*i][y+dy[direction]*i];
    }
    return {N, board, ans, isboard, res};
}

const N11 = {

  default(props = { _N : 4}){
    return generateState(props._N, props.isboard);
  },

  actions: {

    async Choose(state, {X, Y, direction}) {
        X = Number(X); Y = Number(Y);
        let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
        let dy = [0, 1, 1, 1, 0, -1, -1, -1];
        let board = state.board.map(v => v.slice());
        let ans = state.ans;
        let length = ans.length;
        let x = Number(X) + Number(dx[direction]*(length-1)), y = Number(Y) + Number(dy[direction]*(length-1));
        let N = state.N;
        let isboard = state.isboard;
        let res = state.res;

        if (check(X, Y, N, isboard)) throw new Error("Invalid input. Những ô bạn chọn bị lỗi");
        if (check(x, y, N, isboard)) throw new Error("Invalid input. Những ô bạn chọn bị lỗi");
        
        for (let i = 0; i < length; i++){
            res = res + board[X+dx[direction]*i][Y+dy[direction]*i];
        }
        return {N, board, ans, isboard, res};
    },

    async StartaNewGame(state){
      return generateState(state.N, state.isboard);
    },
  },

  isValid(state) {
    let board = state.board.map(v => v.slice());
    let N = state.N;
    for (let i = 1; i <= n; i++) for (let j = 1; j <= n; j++) if (board[i][j] < 0 || board[i][j] > 9) return false;
    return true;
  },

  isEnding(state) {
      let ans = state.ans;
      let res = state.res;
      if (res === "") return null;
      if (res !== ans) return "lose";
      return "won";
  }
}
exports.default = N11;
