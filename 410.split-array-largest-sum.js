/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const len = nums.length;
  let left = 0;
  let right = nums.reduce((acc, item, i) => {
    const sum = acc + item;
    left = Math.max(item, left);
    return sum;
  }, 0);
  const minSum = left;
  const maxSum = right;
  //其他情况的m，最大值必定落在minSum,maxSum当中
  if (m === 1) return maxSum;
  if (m === len) return minSum;
  while (left < right) {
    const mid = (left + right) >>> 1;
    //由mid分割得到的subarrays数量<所需的m
    //m越大mid越小,向左收缩
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
  function check(mid) {
    let curSum = 0;
    let cnt = 1;
    for (let i = 0; i < nums.length; i++) {
      curSum += nums[i];
      if (curSum > mid) {
        cnt++;
        curSum = nums[i];
        if (cnt > m) {
          return false;
        }
      }
    }
    return true;
  }
};
// @lc code=end
console.log(splitArray([7,2,5,10,8],2))
// [7,2,5 ,10,8,2]

// 7 2 5  10, 8,2
