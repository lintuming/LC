/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = [];
  function gen(prev, depth) {
    if (depth > rowIndex+1) {
      return;
    }
    const temp = [1];
    if (depth === 1) {
      result.push(temp);
      return gen(temp, depth + 1);
    }
    for (let i = 1; i < depth; i++) {
      temp.push(prev[i - 1] + (prev[i] || 0));
    }
    result.push(temp);
    gen(temp, depth + 1);
  }
  gen(null, 1);
  return result.pop();
};
// @lc code=end
