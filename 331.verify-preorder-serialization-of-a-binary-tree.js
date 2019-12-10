/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  preorder = preorder.split(",");
  const stack = preorder[0] === "#" ? [] : [2];
  for (let i = 1; i < preorder.length; i++) {
    const t = preorder[i];
    if (!stack.length) stack.push(0);
    stack[stack.length - 1] === 1 ? stack.pop() : stack[stack.length - 1]--;
    if (t !== "#") {
      stack.push(2);
    }
  }
  return !stack.length
};
// @lc code=end
console.log(isValidSerialization("9,#,#,1"))