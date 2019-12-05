/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const divied = numerator / denominator;
  function isInfiniteDecimal(numerator, denominator) {
    
  }
  if (isInfiniteDecimal(numerator, denominator)) {
    const toStr = (divied + "").split(".")[1];
    let i = 1;
    for (; i < toStr.length; i++) {
      if (toStr.slice(0, i) === toStr.slice(i, 2 * i)) {
        break;
      }
    }
    return `0.(${toStr.slice(0, i)})`;
  } else {
    return divied + "";
  }
};
// @lc code=end
console.log(fractionToDecimal(1, 3));
