/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k) return "0";
  let stack = [];
  let i = 0;
  while (i < num.length) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i++]);
  }
  while (k) {
    stack.pop();
    k--;
  }
  //leadingZero
  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }
  return stack.join("");
};

// @lc code=end
console.log(removeKdigits("10", 1));
