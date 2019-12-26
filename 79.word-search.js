/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const visited = {};
  const dirX = [0, 0, -1, 1];
  const dirY = [-1, 1, 0, 0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const w = board[i][j];
      if (board[i][j] !== word[0]) {
        continue;
      }
      if (backTrack(i, j, 0)) {
        return true;
      }
    }
  }
  function backTrack(i, j, index) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      return false;
    }
    const str = board[i][j];
    const k = i + ":" + j;
    if (visited[k] || str !== word[index]) {
      return false;
    }
    if (index === word.length - 1) return true;
    visited[k] = true;
    for (let m = 0; m < 4; m++) {
      const y = i + dirY[m];
      const x = j + dirX[m];
      if (backTrack(y, x, index + 1)) {
        return true;
      }
    }
    visited[k] = false;
    return false;
  }
  return false;
};
// @lc code=end

