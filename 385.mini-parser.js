/*
 * @lc app=leetcode id=385 lang=javascript
 *
 * [385] Mini Parser
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  function desrializeArray(s) {
    s = s.slice(1, s.length - 1);
    const nestedInterger = new NestedInteger();
    for (let i = 0; i < s.length; i++) {
      const str = s[i];
      const start = i;
      if (str === ",") {
        continue;
      } else if (/[0-9-]/.test(str)) {
        while (/[0-9-]/.test(s[i])) {
          i++;
        }
        nestedInterger.add(desrializeNumber(s.slice(start, i)));
        continue;
      } else if (str === "[") {
        let p = 1;
        i++;
        while (p) {
          if (s[i] === "[") {
            p++;
          } else if (s[i] === "]") {
            p--;
          }
          i++;
        }
        nestedInterger.add(desrializeArray(s.slice(start, i)));
      }
    }
    return nestedInterger;
  }
  function desrializeNumber(s) {
    const nestedInterger = new NestedInteger();
    nestedInterger.setInteger(Number(s));
    return nestedInterger;
  }
  return s.startsWith("[") ? desrializeArray(s) : desrializeNumber(s);
};
// @lc code=end
