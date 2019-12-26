/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const output = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    while (nums1[i] === nums1[i + 1]) {
      i++;
    }
    while (nums2[j] === nums2[j + 1]) {
      j++;
    }
    if (nums1[i] === nums2[j]) {
      output.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return output;
};
// @lc code=end
