/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const map = {};
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j];
      const sum = n1 + n2;
      if (map[sum]) {
        map[sum].push([n1, n2]);
      } else {
        map[sum] = [[n1, n2]];
      }
    }
  }
  const out=Object.keys(map)
    .sort((a, b) => a - b)
    .map(k => map[k])
  function flat(arr, depth, output) {
    output = output || [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        flat(arr[i], depth - 1, output);
      } else {
        output.push(arr[i]);
      }
    }
    return output;
  }
  return flat(out, 1).slice(0, k);
};
// @lc code=end
let nums1, nums2, k;
nums1 = [1, 2];
nums2 = [3];
k = 3;
console.log(kSmallestPairs([-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 10));
