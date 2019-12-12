/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  function merge(arr1, arr2) {
    const output = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        output.push(arr1[i++]);
      } else {
        output.push(arr2[j++]);
      }
    }
    while (i < arr1.length) {
      output.push(arr1[i++]);
    }
    while (j < arr2.length) {
      output.push(arr2[j++]);
    }
    return output;
  }
  const sorted = matrix.reduce((acc, item) => merge(acc, item));
  return sorted[k - 1];
};
// @lc code=end
console.log(
  kthSmallest(
    [
      [0, 0, 0],
      [2, 7, 9],
      [7, 8, 11]
    ],
    7
  )
);
