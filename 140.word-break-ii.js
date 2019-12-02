/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak1 = function(s, wordDict) {
  const dp = Array.from({ length: s.length + 1 }, () => []);
  const result = [];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const sliced = s.slice(j, i);
      if (wordDict.includes(sliced)) {
        dp[j][i] = sliced;
      }
    }
  }
  console.log(dp)
  const buffer = [];
  function buildBreakWord(startIdx) {
    if (startIdx >= s.length) {
      return result.push(buffer.join(" "));
    }
    for (let j = 0; j < dp[startIdx].length; j++) {
      if (dp[startIdx][j]) {
        buffer.push(dp[startIdx][j]);
        buildBreakWord(j);
        buffer.pop();
      }
    }
  }
  buildBreakWord(0);
  return result;
};
var wordBreak = function(s, wordDict) {
  var res = [];
  var from = [];
  from[0] = [0];
  for (var i = 1; i <= s.length; i++) {
    from[i] = [];
    for (var j = 0; j < i; j++) {
      if (from[j].length && wordDict.includes(s.substring(j, i))) {
        from[i].push(j);
      }
    }
  }
  console.log(from)
  build(s.length, "");
  return res;

  function build(idx, suffix) {
    if (!idx) return res.push(suffix);
    from[idx].forEach(function(from) {
      build(
        from,
        suffix === ""
          ? s.substring(from, idx)
          : s.substring(from, idx) + " " + suffix
      );
    });
  }
};
// @lc code=end
console.log(
  wordBreak1(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa"
    ]
  )
);