/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var generateTrees = function(n) {
  if(n===0)return [];
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  function gen(child) {
    if (child.length === 0) {
      return [null];
    }
    if (child.length === 1) {
      return [new TreeNode(child[0])];
    }
    const result = [];
    for (let i = 0; i < child.length; i++) {
      const left = gen(child.slice(0, i)); //left is alway smaller than child[i]
      const right = gen(child.slice(i + 1)); //right is alway bigger than child[i]
      for (let m = 0; m < left.length; m++) {
        for (let n = 0; n < right.length; n++) {
          const node = new TreeNode(child[i]);
          node.left = left[m];
          node.right = right[n];
          result.push(node);
        }
      }
    }
    return result;
  }
  return gen(arr);
};
// @lc code=end
