
/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const multiply = [];
  const repeatStr = [];
  let solution = "";
  let temp = "";
  for (let char of s) {
    if (/[0-9]/.test(char)) {
      temp = `${temp}${char}`;
    } else if (char === "[") {
      multiply.push(temp);
      temp = "";
      repeatStr.push(solution);
      solution = "";
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multiply.pop());
    } else {
      solution += char;
    }
  }
 return solution;
};
// @lc code=end
console.log(decodeString("3[a2[c]]"));
console.log('123')