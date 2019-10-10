/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (!str) return 0;
  const numRegExp = /[0-9]/;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    const hasSign = /[\+\-]/.test(str[i]);
    if (numRegExp.test(str[i]) || hasSign) {
      let j = hasSign ? i + 1 : i;
      while (numRegExp.test(str[j])) {
        j++;
      }
      const numStr = str.slice(i, j);
      if (hasSign && j - i === 1) {
        return 0;
      }
      const result = Number(numStr);
      if (Number.isNaN(result)) {
        return 0;
      }
      if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
      if (result < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
      }
      return result;
    } else {
      return 0;
    }
  }
  return 0;
};
// @lc code=end
console.log(myAtoi("-"));
