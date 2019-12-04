/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) return board;
  const xLen = board[0].length,
    yLen = board.length;
  function recurse(x, y) {
    if (x < 0 || x >= xLen || y < 0 || y >= yLen) return;
    if (board[y][x] !== "O") return;
    board[y][x] = "-";
    recurse(x - 1, y);
    recurse(x + 1, y);
    recurse(x, y + 1);
    recurse(x, y - 1);
  }
  for (let y = 0; y < yLen; y++) {
    recurse(0, y);
    recurse(xLen - 1, y);
  }
  for (let x = 0; x < xLen; x++) {
    recurse(x, 0);
    recurse(x, yLen - 1);
  }
  for (let i = 0; i < yLen; i++) {
    for (let j = 0; j < xLen; j++) {
      if (board[i][j] === "-") {
        board[i][j] = "O";
        continue;
      }
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
// @lc code=end
