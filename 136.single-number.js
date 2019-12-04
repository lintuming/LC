/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  /*
  按位异或（XOR）	a ^ b	对于每一个比特位，
  当两个操作数相应的比特位有且只有一个1时，
  结果为1，否则为0。
  */
  return nums.reduce((prev, cur) => prev ^ cur, 0);
};
// @lc code=end
