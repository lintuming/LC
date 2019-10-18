/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const gen = [],
    buffer = [],
    set = [];
  while (n) {
    set.unshift(n--);
  }
  function backTrack(rest) {
    if (gen.length === k) {
      return 
    }
    if (rest.length === 0) {
      return gen.push(buffer.join(""));
    }
    for(let i=0;i<rest.length;i++){
      buffer.push(rest[i]);
      backTrack([...rest.slice(0,i),...rest.slice(i+1)])
      buffer.pop()
    }
  }
  backTrack(set)
  return gen[k-1]
};
// @lc code=end
console.log(getPermutation(3,3));
