/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  solve(0, 0);
  function solve(i, j) {
    if (i >= 9) return true;
    if (j >= 9) return solve(i + 1, 0);
    if (board[i][j] !== ".") return solve(i, j + 1);
    for (let n = 1; n <= 9; n++) {
      const num = "" + n;
      if (!isValid(i, j, num)) continue;
      board[i][j] = num;
      if (solve(i, j + 1)) {
        return true;
      }
      board[i][j] = ".";
    }
    return false;
  }
  function isValid(i, j, n) {
    for (let x = 0; x < 9; x++) {
      if (board[i][x] === n) return false;
    }
    for (let y = 0; y < 9; y++) {
      if (board[y][j] === n) return false;
    }
    const xBase = j - (j % 3),
      yBase = i - (i % 3);
    for (let i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (board[yBase + i][xBase + j] === n) return false;
      }
    }
    return true;
  }
};
// @lc code=end
const sdk = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

solveSudoku(sdk);
console.log(sdk);
