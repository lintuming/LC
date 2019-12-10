/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const output = [];
  for (let i = 0; i <= num; i++) {
    output.push(i.toString(2).replace(/0/g, "").length);
  }
  return output;
};
// @lc code=end
