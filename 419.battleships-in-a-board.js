/*
 * @lc app=leetcode id=419 lang=javascript
 *
 * [419] Battleships in a Board
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;
  const m = board.length,
    n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let slot = board[i][j];
      if (
        slot === "." ||
        (board[i] && board[i][j - 1] === "X") ||
        (board[i - 1] && board[i - 1][j] === "X")
      ) {
        continue;
      }
      count++;
    }
  }
  return count;
};

// @lc code=end
