/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = {};
  const buffer = [];
  if (tickets.length === 0) return buffer;
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (!graph[from]) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (const key in graph) {
    graph[key].sort();
  }
  function dfs(from) {
    const dep = graph[from];
    while (dep && dep.length > 0) {
      dfs(dep.shift());
    }
    buffer.push(from);
  }
  dfs("JFK");
  return buffer.reverse();
};
// @lc code=end
console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "JFK"],
  ])
);
