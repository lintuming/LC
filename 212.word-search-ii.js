/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const graph = {};
  const visited = {};
  const result = [];
  if (words.length === 0) return result;
  const xEnd = board[0].length,
    yEnd = board.length;
  const xPoints = [1, -1, 0, 0];
  const yPoints = [0, 0, 1, -1];
  function search(word, x, y) {
    if (word.length === 0) {
      return true;
    }
    if (x < 0 || y < 0 || x >= xEnd || y >= yEnd) return false;
    const char = board[y][x];
    if (visited[x + ":" + y]) return false;

    if (board[y][x] === word[0]) {
      visited[x + ":" + y] = true;
      const next = word.slice(1);
      for (let i = 0; i < 4; i++) {
        if (search(next, x + xPoints[i], y + yPoints[i])) {
          visited[x + ":" + y] = false;
          return true;
        }
      }
      visited[x + ":" + y] = false;
    } else {
      return false;
    }
  }
  words.forEach(w => {
    for (let i = 0; i < yEnd; i++) {
      for (let j = 0; j < xEnd; j++) {
        if (search(w, j, i)) {
          return result.push(w);
        }
      }
    }
  });
  return result;
};
// @lc code=end
