/*
 * @lc app=leetcode id=352 lang=javascript
 *
 * [352] Data Stream as Disjoint Intervals
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
  this.intervals = [];
  this.nums = new Set();
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  this.nums.add(val);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const sorted = [...this.nums.values()].sort((a, b) =>a-b);
  const output = [];
  for (let i = 0; i < sorted.length; i++) {
    let next = i + 1;
    while (next < sorted.length && sorted[next] === sorted[i] + next - i) {
      next++;
    }
    output.push([sorted[i], sorted[next - 1]]);
    i = next - 1;
  }
  return output;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

