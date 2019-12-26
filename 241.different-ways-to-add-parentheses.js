/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const map = new Map();
  const perform = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b
  };
  function compute(input) {
    if (map.has(input)) {
      return map.get(input);
    }
    const res = [];
    for (let i = 0; i < input.length; i++) {
      const str = input[i];
      if (perform[str]) {
        for (let l of compute(input.slice(0, i))) {
          for (let r of compute(input.slice(i + 1))) {
            res.push(perform[str](l, r));
          }
        }
      }
    }
    if (res.length === 0) {
      res.push(Number(input));
    }
    map.set(input, res);
    return res;
  }
  compute(input)
  return map.get(input)
};
// @lc code=end
