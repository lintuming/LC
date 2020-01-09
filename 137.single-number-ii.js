/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let sum = 0;
    //
    for (let j = 0; j < nums.length; j++) {
      sum += (nums[j] >>> i) & 1;
    }

    res |= sum % 3 << i;
  }
  return res;
};
// @lc code=end
console.log(singleNumber([2,2,3,2]))