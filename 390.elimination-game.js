/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let arr = Array.from(
    {
      length: n
    },
    (_, i) => i + 1
  );
  let forward = true;
  while (arr.length !== 1) {
    if (forward) {
      arr = arr.filter((_, index) => index % 2 !== 0);
    } else {
      const len = arr.length;
      const isOdd = len % 2 !== 0;
      arr = arr.filter((_, index) =>
        isOdd ? index % 2 !== 0 : index % 2 === 0
      );
    }
    forward = !forward;
  }
  return arr.pop();
};
// @lc code=end
console.log(lastRemaining(100000000))