/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  function gen(prev, depth) {
    if (depth > numRows) return;
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
  return result;
};
// @lc code=end
console.log(generate(5));
