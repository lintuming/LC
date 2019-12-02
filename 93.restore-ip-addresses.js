/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];
  //0~255
  const buffer = [];
  function backTrack(idx) {
    if (buffer.length > 4) {
      return;
    }
    if (idx >= s.length) {
      if (buffer.length === 4) {
        result.push(buffer.join("."));
      }
      return;
    }
    for (let i = idx; i < s.length; i++) {
      const digit = s.slice(idx, i + 1);
      const invalid = digit.startsWith("0") && digit.length > 1;
      if (digit <= 255&&!invalid) {
        buffer.push(digit);
        backTrack(i + 1);
        buffer.pop();
      } else {
        break;
      }
    }
  }
  backTrack(0);
  return result;
};
// @lc code=end
console.log(restoreIpAddresses("010010"));
