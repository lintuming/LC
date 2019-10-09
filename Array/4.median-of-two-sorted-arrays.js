/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const temp = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      temp.push(nums2[j]);
      j++;
    } else {
      temp.push(nums1[i]);
      i++;
    }
  }
  while (i < nums1.length) {
    temp.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    temp.push(nums2[j]);
    j++;
  }
  const mid = (temp.length / 2) | 0;
  if (temp.length % 2 === 0) {
    return (temp[mid] + temp[mid - 1]) / 2;
  }
  return temp[mid];
};
// @lc code=end
