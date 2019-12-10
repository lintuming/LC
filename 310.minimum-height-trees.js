/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  const root = [];
  const edgesMap = Array.from({ length: n }, () => []);
  
  for (let i = 0; i < edges.length; i++) {
    const [edge1, edge2] = edges[i];
    edgesMap[edge1].push(edge2);
    edgesMap[edge2].push(edge1);
  }
  for (let i = 0; i < n; i++) {
    const l = calculateLen(i);
    root[i] = l;
  }
  function calculateLen(root, prev) {
    if (edgesMap[root].length === 0) return 1;
    const e = edgesMap[root];
    let height = 0;
    for (let i = 0; i < e.length; i++) {
      if (e[i] === prev) continue;
      height = Math.max(height, calculateLen(e[i], root));
    }
    return height + 1;
  }
  const minHeight = Math.min(...root);
  const output = [];
  root.forEach((h, i) => {
    if (h === minHeight) {
      output.push(i);
    }
  });
  return output
};
// @lc code=end
