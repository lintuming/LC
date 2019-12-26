/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let output = 0;
  function sumTwoList(a, b) {
    const result = new Map();
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        const sum = a[i] + b[j];
        result.set(sum, result.get(sum) + 1 || 1);
      }
    }
    return result
  }
  const sum1 = sumTwoList(A, B);
  const sum2 = sumTwoList(C, D);
  sum1.forEach((count, sum) => {
    const offset = 0 - sum;
    if (sum2.has(offset)) {
      output += count * sum2.get(offset);
    }
  });
  return output;
};
// @lc code=end
console.log(fourSumCount());
