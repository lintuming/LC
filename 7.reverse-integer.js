/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const result =
    (x < 0
      ? ((x = (x + "").slice(1).split("")), -1)
      : ((x = (x + "").split("")), 1)) * Number(x.reverse().join(""));
  if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31)) {
    return 0;
  }
  return result
};
// @lc code=end
console.log(reverse("1534236469"));
