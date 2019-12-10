/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (num.length < 3) return false;
  for (let i = 1; i < num.length; i++) {
    const str1 = num.slice(0, i);
    if (str1.length > 1 && str1[0] === "0") {
      break;
    }
    for (let j = i + 1; j < num.length; j++) {
      const str2 = num.slice(i, j);
      if (str2.length > 1 && str2[0] === "0") break;
      let d1 = Number(str1),
        d2 = Number(str2);
      let next = d1 + d2;
      let nextStr = "" + next;
      if (nextStr !== num.slice(j, j + nextStr.length)) continue;
      let allStr = str1 + str2 + nextStr;
      while (allStr.length < num.length) {
        d1 = d2;
        d2 = next;
        next = d1 + d2;
        nextStr = "" + next;
        allStr += nextStr;
      }
      if (allStr === num) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
console.log(isAdditiveNumber("0235813"));
