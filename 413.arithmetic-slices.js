/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
//should find a less space complexity solution
var numberOfArithmeticSlices = function(A) {
  let count = 0;
  const dp = Array.from({ length: A.length }, () => []);

  for (let i = 1; i < A.length; i++) {
    const prevDp = dp[i - 1];
    const diff = A[i] - A[i - 1];
    dp[i].push([i - 1, diff]);

    for (let j = 0; j < prevDp.length; j++) {
      const [startIdx, diff2] = prevDp[j];
      if (diff2 === diff) {
        dp[i].push([startIdx, diff]);
        if (i + 1 - startIdx >= 3) {
          count++;
        }
      }
    }
  }
  return count;
};
// @lc code=end
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
