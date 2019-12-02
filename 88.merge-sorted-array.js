/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  const maxLen = m + n;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      m++;
      j++;
    }
  }
  while (j < n) {
    nums1[m] = nums2[j];
    j++;
    m++;
  }
  return nums1.splice(m, nums1.length - m);
};
// @lc code=end
