/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  const firstHouseDp = Array(nums.length);
  const lastHouseDp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === 0) {
      firstHouseDp[0] = num;
      lastHouseDp[0] = 0;
    } else if (i - 2 < 0) {
      firstHouseDp[i] = Math.max(firstHouseDp[i - 1], num);
      lastHouseDp[i] = Math.max(lastHouseDp[i - 1], num);
    } else {
      firstHouseDp[i] = Math.max(
        firstHouseDp[i - 1],
        firstHouseDp[i - 2] + (i === nums.length - 1 ? 0 : num)
      );
      lastHouseDp[i] = Math.max(lastHouseDp[i - 1], lastHouseDp[i - 2] + num);
    }
  }
  return Math.max(firstHouseDp[nums.length - 1], lastHouseDp[nums.length - 1]);
};
// @lc code=end
console.log(rob([2,3,2]))
