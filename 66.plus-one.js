/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let prev = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const digit = digits[i];
    const plug1 = digit + prev;
    if (plug1 === 10) {
      digits[i] = 0;
    } else {
      digits[i] = plug1;
      prev = 0;
      break;
    }
  }
  if (prev === 1) digits.unshift(1);
  return digits;
};
// @lc code=end
