/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16]
 */
// @lc code=start
function threeSumClosest(nums, target) {
  let result;
  let prevClosest = Number.MAX_VALUE;
  if (nums.length < 3) {
    return result;
  }

  nums = nums.sort((a, b) => a - b);
  outer: for (let i = 0; i < nums.length; i++) {
    let j = i + 1,
      k = nums.length - 1;
    inner: while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const closest = target - sum;
      if (closest === 0) {
        result = sum;
        break outer;
      } else if (closest > 0) {
        j++;
      } else if (closest < 0) {
        k--;
      }
      if (Math.abs(closest) < prevClosest) {
        result = sum;
        prevClosest = Math.abs(closest);
      }
    }
  }
  return result
}
// @lc code=end