/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % k !== 0) return false;
  const target = sum / k;
  const visited = {};
  function recurse(startIdx, curSum, k) {
    if (k === 0) {
      return true;
    }
    if (curSum === target) {
      return recurse(0, 0, k - 1);
    }
    if (curSum > target) return false;
    for (let i = startIdx; i < nums.length; i++) {
      const n = nums[i];
      if (visited[i]) continue;
      visited[i] = true;
      if (recurse(startIdx + 1, curSum + n, k)) {
        return true;
      }
      visited[i] = false;
    }
    return false;
  }
  return recurse(0, 0, k);
};
// @lc code=end
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
