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
var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;
  let mid1 = (len / 2) | 0;
  let mid2 = len % 2 === 0 ? mid1 - 1 : mid1;

  console.log(mid1,mid2)
  let i = 0,
    j = 0,
    m = 0;
  let m2;
  let m1;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      if (m === mid2) {
        m2 = nums1[i];
      }
      if (m === mid1) {
        m1 = nums1[i];
      }
      if (m1 && m2) {
        return (m1 + m2) / 2;
      }
      i++;
      m++;
    } else {
      if (m === mid2) {
        m2 = nums1[i];
      }
      if (m === mid1) {
        m1 = nums1[i];
      }
      if (m1 && m2) {
        return (m1 + m2) / 2;
      }
      j++;
      m++;
    }
  }
  while (i < nums1.length) {
    if (m === mid2) {
      m2 = nums1[i];
    }
    if (m === mid1) {
      m1 = nums1[i];
    }
    if (m1 && m2) {
      return (m1 + m2) / 2;
    }
    i++;
    m++;
  }
  while (j < nums2.length) {
    if (m === mid2) {
      m2 = nums2[j];
    }
    if (m === mid1) {
      m1 = nums2[j];
    }
    if (m1 && m2) {
      return (m1 + m2) / 2;
    }
    j++;
    m++;
  }
};
// @lc code=end
