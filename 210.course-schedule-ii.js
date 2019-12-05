/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const hashMap = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i];
    (hashMap[course] || (hashMap[course] = [])).push(prerequisite);
  }
  const output = [];
  const isReading = {};
  const cache = {};
  function finishCourse(course) {
    if (cache[course]) {
      return true;
    }
    if (!hashMap[course]) {
      output.push(course);
      cache[course] = true;
      return true;
    }
    if (isReading[course]) {
      return false;
    }
    const p = hashMap[course];
    isReading[course] = true;
    for (let i = 0; i < p.length; i++) {
      if (!finishCourse(p[i])) {
        return false;
      }
    }
    isReading[course] = false;
    output.push(course);
    cache[course] = true;
    return true;
  }
  const canfinishAll = Object.keys(hashMap).every(course =>
    finishCourse(course)
  );

  if (canfinishAll) {
    for (let i = 0; i < numCourses; i++) {
      if (!cache[i]) {
        output.push(i);
      }
    }
    return output;
  }else{
    return []
  }
};
// @lc code=end
console.log(
  findOrder(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3]
  ])
);
