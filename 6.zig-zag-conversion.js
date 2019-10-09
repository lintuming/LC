/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows===1)return s;
  const dp = [];
  let reverse = false,
    c = 0;
  for (let i = 0; i < numRows; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < s.length; i++) {
    dp[c].push(s[i]);
    reverse ? c-- : c++;
    if (c === 0 || c === numRows - 1) reverse = !reverse;
  }
  return dp.reduce((result, row) => {
    return result + row.join("");
  }, "");
};
// @lc code=end
console.log(convert("PAYPALISHIRING", 3));
