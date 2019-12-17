/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let res = "",
    left = 0,
    right = 0;
  const count = {};
  t.split("").forEach(char => {
    count[char] = count[char] + 1 || 1;
  });
  let total = Object.keys(count).length;
  while (right <= s.length) {
    if (total === 0) {
      const current = s[left];
      if (count[current] !== undefined) {
        count[current]++;
      }
      if (count[current] > 0) {
        total++;
      }
      const temp = s.slice(left, right);
      if (res === "") {
        res = temp;
      } else {
        if (res.length > temp.length) {
          res = temp;
        }
      }
      left++;
    } else {
      const current = s[right];
      if (count[current] !== undefined) {
        count[current]--;
      }
      if (count[current] === 0) {
        total--;
      }
      right++;
    }
  }

  return res;
};
// @lc code=end
console.log(minWindow("bba", "ab"));
