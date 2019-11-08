/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "/") {
      if (path[i + 1] === "/") {
        continue;
      }
      let j = i + 1;
      while (j <= path.length - 1 && path[j] !== "/") {
        j++;
      }
      if (j !== i + 1) {
        const substr = path.slice(i + 1, j);
        if (substr === "..") {
          stack.pop();
        } else if (substr !== ".") {
          stack.push(substr);
        }
      }
      i = j - 1;
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
console.log(simplifyPath("/a/../../b/../c//.//"));
