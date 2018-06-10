"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function random(N) {
  return Math.floor(Math.random() * N);
}

const N31 = {
  default(props) {
    let N = props.N;
    let board = [];
    let hidden = [];
    let visit = [];

    for (let i = 0; i < N; ++i) {
      board.push(Array(N));
      visit.push(Array(N));
      hidden.push(Array(N));
    }

    while (1) {
      for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
          visit[i][j] = 0;
          board[i][j] = null;
        }
      }

      // building board
      for (let t = 0; t < 2; ++t) {
        for (let i = t; i < N; i += 2) {
          let visit2 = Array(N).fill(0);
          
          for (let j = 0; j < N; ++j) {
            let arr = [];  
            for (let k = (t + j) % 2; k < N; k += 2) arr.push(k);
            
            while (arr.length > 0) {
              let id = random(arr.length);
              let k = arr[id];
              arr.splice(id, 1);
              if (visit[j][k] == 0 && visit2[k] == 0) {
                visit[j][k] = visit2[k] = 1, board[j][k] = i;
                break;
              }
            }
          }
        }

        // building hidden
        for (let i = 0; i < N; ++i) {
          for (let j = 0; j < N; ++j) {
            hidden[i][j] = random(2);
          }
        }
      }

      let cnt = 0;
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

    return {board: board, hidden: hidden}
  },

  actions: {
    async move(state, {value, row, col}) {
      let N = state.board.length;
      let board = state.board.map(v => v.slice());
      let hidden = state.hidden.map(v => v.slice());

      const invalid = " Move is invalid.";

      // wrong format input
      if (value != "" && parseInt(value) != value || value >= N) {
        throw new Error("Wrong format!" + invalid);
      }

      // check hidden cell
      if (hidden[row][col] == 0) {
        throw new Error("The number at " + "[" + row + ", " + col + "]" + " cannot be changed!" + invalid);
      }

      // check empty string
      if (value == "") {
        board[row][col] = "";
        return {board: board, hidden: hidden};
      }

      value = parseInt(value);
      // check parity
      if (value % 2 != (row + col) % 2) {
        throw new Error("The number at " + "[" + row + ", " + col + "]" + " must be " + (((row + col) % 2 == 0) ? "even!" : "odd!") + invalid);
      }

      // check distinct number in each column and row
      board[row][col] = value;
      for (let i = 0; i < N; ++i) {
        if (board[row][i] === "") continue;
        if (board[row][i] == board[row][col] && i != col) {
          throw new Error("Row " + row + " has two equal number!" + invalid);
        }
      }
      for (let i = 0; i < N; ++i) {
        if (board[i][col] === "") continue;
        if (board[i][col] == board[row][col] && i != row) {
          throw new Error("Column " + col + " has two equal number!" + invalid);
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
