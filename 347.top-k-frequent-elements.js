/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] >= 1) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  const sorted = Object.keys(map).sort((key1, key2) => map[key2] - map[key1]);
  return sorted.slice(0, k).map(Number);
};
// @lc code=end
console.log(topKFrequent([1,1,1,2,2,3], 2));
