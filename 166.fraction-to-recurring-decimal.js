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
  if (numerator === 0) return "0";
  const isNegative = numerator < 0 ? denominator > 0 : denominator < 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const leftHandside = (numerator / denominator) >>> 0;
  const isDecimal = !!((numerator / denominator) % 1);
  if (!isDecimal) {
    return (isNegative ? "-" : "") + leftHandside;
  }
  const result = [leftHandside, "."];
  let id = 2;
  addDecimal(numerator, denominator, leftHandside, result);
  if (isNegative) {
    result.unshift("-");
  }
  return result.join("");

  function addDecimal(numerator, denominator, leftHandside, result) {
    numerator -= leftHandside * denominator;
    const repeat = {};
    while (numerator !== 0 && !repeat[numerator]) {
      repeat[numerator] = id++;
      numerator = numerator * 10;
      result.push((numerator / denominator) | 0);
      numerator %= denominator;
    }
    if (repeat[numerator]) {
      addParenthese(repeat, numerator, result);
    }
  }
  function addParenthese(repeat, numerator, result) {
    const idx = repeat[numerator];
    result.splice(idx, 0, "(");
    result.push(")");
  }
};
// @lc code=end
console.log(fractionToDecimal(-2147483648, 1));
