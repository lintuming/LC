/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const start = "0".repeat(n);
  const result = [];
  const buffer = [];
  function backTrack(n) {
    if (n === 0) {
      return result.push(buffer.join(""));
    }
    buffer.push("0");
    backTrack(n - 1);
    buffer.pop();
    buffer.push("1");
    backTrack(n - 1);
    buffer.pop();
  }
  backTrack(n);
  console.log(result);
  return result.map(bit => Number(`0b${bit}`));
};
// @lc code=end
console.log(grayCode(2));
