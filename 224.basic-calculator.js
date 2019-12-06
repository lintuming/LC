/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, "");
  function processExpression(startIdx, endIdx) {
    const stack = [];
    let lastOp = null;
    for (let i = startIdx; i <= endIdx; i++) {
      const str = s[i];
      let currentNum = null;
      if (["+", "-"].includes(str)) {
        lastOp = str;
        continue;
      }
      if (str === "(") {
        let openCount = 1;
        let j = i + 1;
        while (openCount > 0) {
          if (s[j] === ")") openCount--;
          if (s[j] === "(") openCount++;
          j++;
        }
        currentNum = processExpression(i + 1, j - 2);
        i = j - 1;
      }
      if (currentNum === null) {
        let j = i + 1;
        while (j <= endIdx && /[0-9]/.test(s[j])) {
          j++;
        }
        currentNum = Number(s.slice(i, j));
        i = j - 1;
      }
      if (lastOp !== null) {
        const prev = stack.pop();
        if (lastOp === "+") {
          stack.push(prev + currentNum);
        } else {
          stack.push(prev - currentNum);
        }
        lastOp = null;
      } else {
        stack.push(currentNum);
      }
    }
    return stack.pop();
  }
  return processExpression(0, s.length - 1);
};
// @lc code=end
console.log(calculate("(7)-(0)+(4)"));
