/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const translations = new Map([
  [1000000000, "Billion"],
  [1000000, "Million"],
  [1000, "Thousand"],
  [100, "Hundred"],
  [90, "Ninety"],
  [80, "Eighty"],
  [70, "Seventy"],
  [60, "Sixty"],
  [50, "Fifty"],
  [40, "Forty"],
  [30, "Thirty"],
  [20, "Twenty"],
  [19, "Nineteen"],
  [18, "Eighteen"],
  [17, "Seventeen"],
  [16, "Sixteen"],
  [15, "Fifteen"],
  [14, "Fourteen"],
  [13, "Thirteen"],
  [12, "Twelve"],
  [11, "Eleven"],
  [10, "Ten"],
  [9, "Nine"],
  [8, "Eight"],
  [7, "Seven"],
  [6, "Six"],
  [5, "Five"],
  [4, "Four"],
  [3, "Three"],
  [2, "Two"],
  [1, "One"]
]);
var numberToWords = function(num, nested) {
  if (num === 0) {
    if (nested) return "";
    return "Zero";
  }
  const stringify = String(num);
  let result = "";
  if (num < 20) {
    result = translations.get(num);
  } else if (num < 100) {
    result =
      translations.get(Number(stringify[0] + "0")) +
      " " +
      numberToWords(Number(stringify[1]), true);
  } else {
    let i = 1;
    while (!translations.get(Number("1" + "0".repeat(stringify.length - i)))) {
      i++;
    }
    result =
      numberToWords(Number(stringify.slice(0, i)), true) +
      " " +
      translations.get(Number("1" + "0".repeat(stringify.length - i))) +
      " " +
      numberToWords(Number(stringify.slice(i)), true);
  }
  return result.trim();
};
// @lc code=end
console.log(numberToWords(200));
