/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [divisor, dividend] = equations[i];
    if (graph[divisor]) {
      graph[divisor].push([dividend, values[i]]);
    } else {
      graph[divisor] = [[dividend, values[i]]];
    }
    if (graph[dividend]) {
      graph[dividend].push([divisor, 1 / values[i]]);
    } else {
      graph[dividend] = [[divisor, 1 / values[i]]];
    }
  }
  const output = [];
  function divide(divisor, dividend, prev) {
    if (!graph[divisor] || !graph[dividend]) {
      return -1;
    }
    if (divisor === dividend) return 1;
    const g = graph[divisor];
    for (let i = 0; i < g.length; i++) {
      const [d, val] = g[i];
      if (d === prev) continue;
      const temp = divide(d, dividend, divisor);
      if (temp !== -1) {
        return val * temp;
      }
    }
    return -1;
  }
  for (let i = 0; i < queries.length; i++) {
    const [divisor, dividend] = queries[i];
    output.push(divide(divisor, dividend));
  }
  return output;
};
// @lc code=end
console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"]
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"]
    ]
  )
);
