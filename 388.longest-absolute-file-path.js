/*
 * @lc app=leetcode id=388 lang=javascript
 *
 * [388] Longest Absolute File Path
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */

var lengthLongestPath = function(input) {
  function recurse(str, depth) {
    let maxLen = 0;
    const reg = new RegExp(`\n${"\t".repeat(depth)}(?!\t)`);
    const [topDir, ...rest] = str.split(reg);

    if (rest.length === 0) {
      if (topDir.includes(".")) {
        return topDir.length;
      } else {
        return 0;
      }
    }
    for (let i = 0; i < rest.length; i++) {
      maxLen = Math.max(maxLen, recurse(rest[i], depth + 1));
    }
    if (maxLen !== 0) {
      return topDir.length + 1 + maxLen;
    } else {
      return maxLen;
    }
  }
  return recurse(input, 1);
};
// @lc code=end
console.log(lengthLongestPath("dir\n\tfile.txt"));
