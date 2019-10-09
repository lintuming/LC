/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15]
 */
// @lc code=start
function threeSum(arr) {
  const result = [];

  if (arr.length < 3) {
    return result;
  }

  arr = arr.sort((a, b) => a - b);
  let target = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      break;
    }
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = arr.length - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum === target) {
        result.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else if (target < sum) {
        k--;
      }
    }
  }
  return result;
}
// @lc code=end
