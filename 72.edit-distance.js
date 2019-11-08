/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = [[]];
  function findMin(m, n) {
    if ((dp[m] = dp[m] || []) && dp[m][n]) {
      return dp[m][n];
    }
    if (m === 0) {
      //word1 is nothing left,the rest operation count is n(the rest word2)
      dp[m][n] = n;
      return n;
    } else if (n === 0) {
      //word2 is nothing left,the rest operation count is m
      dp[m][n] = m;
      return m;
    }
    if (word1[m - 1] !== word2[n - 1]) {
      dp[m][n] =
        1 +//one operation
        Math.min(
          findMin(m, n - 1), //insert
          findMin(m - 1, n), //delete
          findMin(m - 1, n - 1)//replace
        );
    } else {
      dp[m][n] = findMin(m - 1, n - 1);
    }
    return dp[m][n];
  }
  return findMin(m, n);
};
// @lc code=end
