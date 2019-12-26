/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//construct a binary search tree
class TreeNode {
  constructor(value, size = 0) {
    this.value = value;
    //total count of it's left subtree's treeNode.
    this.size = size;
    this.left = this.right = null;
  }
  insert(value, size = 0) {
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, this.size + size + 1);
      } else {
        this.right = new TreeNode(value);
        return this.size + size + 1;
      }
    } else {
      this.size++;
      if (this.left) {
        return this.left.insert(value, size);
      } else {
        this.left = new TreeNode(value);
        return size;
      }
    }
  }
}
var countSmaller = function(nums) {
  const output = [];
  if (nums.length === 0) return output;
  const root = new TreeNode(nums.pop());
  output.push(0)
  while (nums.length) {
    output.unshift(root.insert(nums.pop()));
  }
  return output;
};
// @lc code=end
console.log(countSmaller([5, 2, 6, 1]));
