/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const record = {};
  function next(num) {
    let res = 0;
    while (num !== 0) {
      res += Math.pow(num % 10, 2);
      num = (num / 10) >>> 0;
    }
    return res;
  }
  while (n !== 1 && !record[n]) {
    record[n] = true;
    n = next(n);
  }
  if (record[n]) return false;
  return true;
};
// @lc code=end

console.log(isHappy(19));
