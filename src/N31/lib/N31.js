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

function genBoard(N) {
  let board = [];
  for (let i = 0; i < N; ++i) {
    let arr = [];
    for (let j = 0; j < N; ++j) {
      arr.push((i + j) % N);
    }
    board.push(arr);
  }

  let arrCol = [];
  let arrRow = [];
  for (let i = 0; i < N; ++i) {
    arrCol.push(i), arrRow.push(i);
  }
  random_shuffle(arrCol);
  random_shuffle(arrRow);

  let board2 = [];
  for (let i = 0; i < N; ++i) {
    board2.push(Array(N));
  }

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      board2[i][j] = board[arrRow[i]][arrCol[j]];
    }
  }

  return board2;
}

const N31 = {
  default(props) {
    let N = props.N;
    let board = [];
    
    for (let i = 0; i < N; ++i) {
      board.push(Array(N));
    }

    // building board
    for (let i = 0; i < 2; ++i) {
      let M = Math.floor(N / 2);
      if (N % 2 == 1 && i % 2 == 0) M++;
      let board2 = genBoard(M);

      for (let j = 0; j < N; j += 2) {
        for (let k = i; k < N; k += 2) {
          board[j][k] = board2[Math.floor(j / 2)][Math.floor(k / 2)] * 2 + i;
        }
      }

      board2 = genBoard(M);
      for (let j = 1; j < N; j += 2) {
        for (let k = 1 - i; k < N; k += 2) {
          board[j][k] = board2[Math.floor(j / 2)][Math.floor(k / 2)] * 2 + i;
        }
      }
    }

    // building hidden
    let hidden = [];
    for (let i = 0; i < N; ++i) {
      hidden.push(Array(N).fill(0));
    }
    let board2 = board.map(v => v.slice());

    while (1) {
      for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
          hidden[i][j] = random(2);
        }
      }

      let cnt = 0;
      board = board2.map(v => v.slice());
      for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
          if (hidden[i][j] == 1) {
            board[i][j] = "";
          }
          else cnt++;
        }
      }

      // we want number of hidden cells ~ N * N / 2 
      if (cnt < N * N / 2 - N / 2 || cnt > N * N / 2 + N / 2) continue;
      break;
    }

    return {board: board, hidden: hidden};
  },

  actions: {
    async move(state, {value, row, col}) {
      let N = state.board.length;
      let board = state.board.map(v => v.slice());
      let hidden = state.hidden.map(v => v.slice());

      const invalid = " Nước đi không hợp lệ.";

      // wrong format input
      if (value != "" && parseInt(value) != value || value >= N) {
        throw new Error("Sai định dạng!" + invalid);
      }

      // check hidden cell
      if (hidden[row][col] == 0) {
        throw new Error("Số ở ô " + "[" + row + ", " + col + "]" + " không thể thay đổi!" + invalid);
      }

      // check empty string
      if (value == "") {
        board[row][col] = "";
        return {board: board, hidden: hidden};
      }

      value = parseInt(value);
      // check parity
      if (value % 2 != (row + col) % 2) {
        throw new Error("Số ở ô " + "[" + row + ", " + col + "]" + " phải là số " + (((row + col) % 2 == 0) ? "chẵn!" : "lẻ!") + invalid);
      }

      // check distinct number in each column and row
      board[row][col] = value;
      for (let i = 0; i < N; ++i) {
        if (board[row][i] === "") continue;
        if (board[row][i] == board[row][col] && i != col) {
          throw new Error("Hàng " + row + " có hai số giống nhau!" + invalid);
        }
      }
      for (let i = 0; i < N; ++i) {
        if (board[i][col] === "") continue;
        if (board[i][col] == board[row][col] && i != row) {
          throw new Error("Cột " + col + " có hai số giống nhau!" + invalid);
        }
      }
      
      return {board: board, hidden: hidden};
    }
  },

  isValid(state) {
  // nothing to do here ?
  },

  isEnding(state) {
    let N = state.board.length;

    // check parity
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        if (state.board[i][j] === "") continue;
        if (state.board[i][j] % 2 != (i + j) % 2) return null;
      }
    }

    // check row
    for (let i = 0; i < N; ++i) {
      let visit = Array(N).fill(0);
      for (let j = 0; j < N; ++j) {
        if (state.board[i][j] === "") continue;
        visit[state.board[i][j]] = 1;
      }
      for (let j = 0; j < N; ++j) {
        if (visit[j] == 0) return null;
      }
    }

    // check column
    for (let i = 0; i < N; ++i) {
      let visit = Array(N).fill(0);
      for (let j = 0; j < N; ++j) {
        if (state.board[i][j] === "") continue;
        visit[state.board[j][i]] = 1;
      }
      for (let j = 0; j < N; ++j) {
        if (visit[j] == 0) return null;
      }    
    }

    return "won";
  }
}

exports.default = N31;
