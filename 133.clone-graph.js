/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const visited = {};
  function dfs(nodes) {
    const newNodes = [];
    while (nodes.length) {
      const oldNode = nodes.shift();
      if (visited[oldNode.val]) {
        newNodes.push(visited[oldNode.val]);
        continue;
      }
      const newNode = new Node(oldNode.val);
      visited[oldNode.val] = newNode;
      newNode.neighbors = dfs(oldNode.neighbors);
      newNodes.push(newNode);
    }
    return newNodes;
  }
  return dfs([node])[0];
};
// @lc code=end
