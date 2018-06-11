"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function random(N) {
  return Math.floor(Math.random() * N);
}

function random_shuffle(arr) {
  let N = arr.length;
  let buf = arr.slice();
  arr.splice(0, N);

  while (buf.length > 0) {
    let id = random(buf.length);
    arr.push(buf[id]), buf.splice(id, 1);
  }
}

const dir = [[-2, 0], [2, 0], [0, -2], [0, 2]];

const S51 = {
  default({N, M}) {
    let board = [];
    for(let i = 0; i < N; ++i) {
      board.push(Array(M).fill(0));
    }

    let lim = 2 + random(N * M - 2); 

    let arr = [];
    arr.push([random(N), random(M)]); 
    board[arr[0][0]][arr[0][1]] = 1;

    while(arr.length <= lim) {
      random_shuffle(arr);
      let found = false;
      for(let i = 0; i < arr.length; ++i) {
        let dir2 = dir.map(v => v.slice());
        random_shuffle(dir2);
        for(let j = 0; j < 4; ++j) {
          let x = arr[i][0];
          let y = arr[i][1];
          let x1 = x + dir2[j][0];
          let y1 = y + dir2[j][1];
          let x2 = x + dir2[j][0] / 2;
          let y2 = y + dir2[j][1] / 2;
          if(x1 >= N || y1 >= M || x1 < 0 || y1 < 0) continue;
          if(board[x1][y1] == 1 || board[x2][y2] == 1) continue;
          board[x1][y1] = 1;
          board[x2][y2] = 1;
          board[x][y] = 0;
          found = true;
          arr.splice(i, 1);
          arr.push([x1, y1]);
          arr.push([x2, y2]);
          break;
        }
        if(found) break;
      }
      if(!found) break;
    }


    return {board: board};
  },

  actions: {
    async move(state, {r1, c1, r2, c2, err}) {
      let board = state.board.map(v => v.slice());
      let N = board.length;
      let M = board[0].length;

      if (err == 0) {
          let x = (r1 + r2) / 2;
          let y = (c1 + c2) / 2;
          board[x][y] = 0;
          board[r1][c1] = 0;
          board[r2][c2] = 1;
      }
      else {
        throw new Error("Nước đi không hợp lệ");
      }
      
      return {board: board};
    }
  },

  isValid(state) {
  // nothing to do here ?
  },

  isEnding(state) {
    let N = state.board.length;
    let M = state.board[0].length;
    let cnt = 0;

    for(let i = 0; i < N; ++i)
      for(let j = 0; j < M; ++j)
        if(state.board[i][j] == 1)
          cnt++;
    if(cnt == 1) return "won";

    cnt = 0;
    for(let x = 0; x < N; ++x)
      for(let y = 0; y < M; ++y)
        for(let i = 0; i < 4; ++i) {
          let x1 = x + dir[i][0];
          let y1 = y + dir[i][1];
          let x2 = x + dir[i][0] / 2;
          let y2 = y + dir[i][1] / 2;
          if(x1 < 0 || y1 < 0 || x1 >= N || y1 >= M) continue;
          if(state.board[x][y] == 0) continue;
          if(state.board[x1][y1] == 1) continue;
          if(state.board[x2][y2] == 0) continue;
          cnt++;
        }
    if(cnt == 0) return "lose";

    return null;
  }
}

exports.default = S51;