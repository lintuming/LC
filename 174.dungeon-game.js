/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const dp = Array.from(
    {
      length: dungeon.length
    },
    () => []
  );
  const m = dungeon.length,
    n = dungeon[0].length;
  for (let i = m - 1; i >= 0; i--) {
    inner: for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) {
        dp[i][j] = dungeon[i][j] >= 0 ? 1 : -1 * dungeon[i][j] + 1;
        continue inner;
      }
      let max = Number.MAX_VALUE;
      //find the minumun hp we needed to the next dungeon.
      if (j + 1 <= n - 1) {
        max = Math.min(max, dp[i][j + 1]);
      }
      if (i + 1 <= m - 1) {
        max = Math.min(max, dp[i + 1][j]);
      }
      const d = dungeon[i][j];
      //if the hp the orbs can increased is bigger than the hp we need to the next dungeon
      //we just need 1 hp to reach to the current dungeon
      if (d >= max) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = max - d;
      }
    }
  }
  return dp[0][0];
};
// @lc code=end
console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
  ]),
  calculateMinimumHP([
    [0, 5],
    [-2, -3]
  ]),
  calculateMinimumHP([[-3, 5]])
);
