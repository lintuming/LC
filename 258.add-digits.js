/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;
  return addDigits(
    String(num)
      .split("")
      .reduce((a, b) => Number(a) + Number(b))
  );
};
// @lc code=end
console.log(addDigits(38))