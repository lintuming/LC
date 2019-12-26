/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const col = new Set();
  const row = new Set();
  const boxes = new Set();
  const sets = [col, row, boxes];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const values = [
        board[i][j],
        board[j][i],
        board[3 * ((i / 3) >> 0) + ((j / 3) >> 0)][3 * (i % 3) + (j % 3)]
      ];
      if (sets.some((s, i) => s.has(values[i]))) {
        return false;
      }
      sets.forEach((s, i) => {
        if (values[i] !== ".") {
          s.add(values[i]);
        }
      });
    }
    sets.forEach(s => s.clear());
  }
  return true;
};
// @lc code=end
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])
);
