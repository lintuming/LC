/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Gas Station
 */
// @lc code=start
function maxArea(arr) {
  let l = 0;
  let r = arr.length - 1;
  let area = 0;
  while (l < r) {
    const lv = arr[l];
    const rv = arr[r];
    area = Math.max(area, Math.min(lv, rv) * (r - l));
    if (lv < rv) {
      l++;
    } else {
      r--;
    }
  }
  return area;
}
// @lc code=end
