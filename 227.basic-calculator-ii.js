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
  const stack = [];
  let sign = "+";
  let n = 0;
  const ops = {
    "+": n => stack.push(n),
    "-": n => stack.push(-n),
    "*": n => stack.push(stack.pop() * n),
    "/": n => stack.push((stack.pop() / n) >>> 0)
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/\d/.test(char)) n = n * 10 + Number(char);

    if (/\D/.test(char) || i === s.length - 1) {
      ops[sign](n);
      sign = char;
      n = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};
// @lc code=end
console.log(calculate("3/2"));
