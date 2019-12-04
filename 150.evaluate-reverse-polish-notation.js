/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (["+", "-", "*", "/"].includes(token)) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === "+") {
        stack.push(num2 + num1);
      } else if (token === "-") {
        stack.push(num1 - num2);
      } else if (token === "/") {
        stack.push((num1 / num2) | 0);
      } else {
        stack.push(num1 * num2);
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
// @lc code=end
console.log(evalRPN(["4", "13", "5", "/", "+"]));
