/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const output = [];
  function push(from, to) {
    while (from <= to && from <= n) {
      output.push(from);
      push(from * 10, from * 10 + 9);
      from++;
    }
  }
  push(1,9)
  return output
};
// @lc code=end
console.log(lexicalOrder(1));
