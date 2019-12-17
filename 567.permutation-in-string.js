/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let left = 0,
    right = -1;
  const count = {};
  s1.split("").forEach(char => (count[char] = count[char] + 1 || 1));
  let total = Object.keys(count).length;
  let current;
  while (right <= s2.length) {
    if (total === 0) {
      current = s2[left];
      if (count[current] !== undefined) {
        count[current]++;
      }
      if (count[current] > 0) {
        total++;
      }
      const len = right + 1 - left;
      if (len === s1.length) {
        return true;
      }
      left++
    } else {
      right++;
      current = s2[right];
      if (count[current] !== undefined) {
        count[current]--;
      }
      if (count[current] === 0) {
        total--;
      }
    }
  }
  return false
};
// @lc code=end
console.log(checkInclusion("abc", "cccba"));
