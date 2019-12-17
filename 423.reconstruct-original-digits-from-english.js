/*
 * @lc app=leetcode id=423 lang=javascript
 *
 * [423] Reconstruct Original Digits from English
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  const words = [
    "zero",
    "two",
    "four",
    "six",
    "eight",
    "one",
    "three",
    "five",
    "seven",
    "nine"
  ];
  const chars = ["z", "w", "u", "x", "g", "o", "h", "f", "s", "n"];
  const nums = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  const count = {};
  for (let c of s) {
    count[c] = count[c] + 1 || 1;
  }
  const res = [];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    while (count[char] > 0) {
      const word = words[i];
      for (let j = 0; j < word.length; j++) {
        count[word[j]]--;
      }
      res.push(nums[i]);
    }
  }
  return res.sort((a, b) => a - b).join("");
};
// @lc code=end
console.log(originalDigits("fviefuro"));
