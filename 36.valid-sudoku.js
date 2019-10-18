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
  const hashTable = {};
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    col = new Set();
    sqr = new Set();
    for (let j = 0; j < 9; j++) {
      // const rowValue = board[i][j];
      // const colValue = board[j][i];
      // const sqrValue =
      //   board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
      console.log(
        i,
        j,
        Math.floor(i / 3) * 3 + Math.floor(j / 3),
        (i % 3) * 3 + (j % 3)
      );
      
    }
  }
};
// @lc code=end
console.log(isValidSudoku([]));
