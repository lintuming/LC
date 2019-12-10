/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const operators = [];
  let m = board.length,
    n = board[0].length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      check(i, j);
    }
  }
  function check(i, j) {
    const state = board[i][j];
    let lives = 0,
      dead = 0;
    for (let y = i - 1; y <= i + 1; y++) {
      inner: for (let x = j - 1; x <= j + 1; x++) {
        if (board[y]) {
          if (y === i && x === j) {
            continue inner;
          }
          if (board[y][x] === 1) {
            lives += 1;
          } else if (board[y][x] === 0) {
            dead += 1;
          }
        } else {
          continue inner;
        }
      }
    }
    if (state === 1) {
      if (lives < 2 || lives > 3) {
        return operators.push(() => (board[i][j] = 0));
      }
    } else if (state === 0) {
      if (lives === 3) {
        return operators.push(() => (board[i][j] = 1));
      }
    }
  }
  operators.forEach(op => op());
};
// @lc code=end
console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ])
);
