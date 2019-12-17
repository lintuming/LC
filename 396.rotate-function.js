/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  if (A.length === 0) return 0;
  let max = -Number.MAX_VALUE;
  const len = A.length;
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    let increase = 0;
    let mid = (len - i) % len;
    let m = mid;
    while (m < len) {
      sum += increase++ * A[m++];
    }
    m = 0;
    while (m < mid) {
      sum += increase++ * A[m++];
    }
    max = Math.max(max, sum);
  }
  return max;
};
// @lc code=end
console.log(maxRotateFunction([4, 3, 2, 6]));
