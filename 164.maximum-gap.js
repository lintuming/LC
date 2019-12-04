/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0;
  function merge(nums1, nums2) {
    const result = [];
    let i = 0,
      j = 0;
    while (nums1[i] && nums2[j]) {
      if (nums1[i] > nums2[j]) {
        result.push(nums2[j]);
        j++;
      } else {
        result.push(nums1[i]);
        i++;
      }
    }
    while (nums1[i]) {
      result.push(nums1[i++]);
    }
    while (nums2[j]) {
      result.push(nums2[j++]);
    }
    return result;
  }
  function sort(start, end) {
    if (start === end) {
      return [nums[start]];
    }
    const mid = ((start + end) / 2) | 0;
    return merge(sort(start, mid), sort(mid+1, end));
  }
  nums = sort(0, nums.length - 1);
  let maxGap = 0;
  let prev = null;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (prev) {
      maxGap = Math.max(maxGap, num - prev);
    }
    prev = num;
  }
  return maxGap;
};
// @lc code=end

