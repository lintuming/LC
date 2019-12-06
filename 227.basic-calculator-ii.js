/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, "");
  function processExpression(startIdx) {
    const stack = [];
    for (let i = startIdx; i < s.length; i++) {
      const str = s[i];
      if (["+", "-", "*", "/"].includes(str)) {
        const poped = stack.pop();
        if (str === "+") {
          stack.push(poped + processExpression(i + 1));
          return stack[0];
        } else if (str === "-") {
          stack.push(poped - processExpression(i + 1));
          return stack[0];
        } else if (str === "*") {
          stack.push(poped * processExpression(i + 1));
          return stack[0];
        } else {
          stack.push((poped / processExpression(i + 1)) | 0);
          return stack[0];
        }
      }
      let j = i + 1;
      while (j < s.length && /[0-9]/.test(s[j])) {
        j++;
      }
      stack.push(Number(s.slice(i, j)));
      i = j - 1;
    }
    return stack.pop();
  }
  return processExpression(0);
};
// @lc code=end
console.log(calculate("1-1+1"));
