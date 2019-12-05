/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const hashMap = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequest] = prerequisites[i];
    (hashMap[course] || (hashMap[course] = [])).push(prerequest);
  }
  const isReading = {};
  function canRead(course) {
    if (!hashMap[course]) {
      return true;
    }
    if (isReading[course]) return false;
    const prerequest = hashMap[course];
    isReading[course] = true;
    for (let i = 0; i < prerequest.length; i++) {
      if (!canRead(prerequest[i])) {
        return false;
      }
    }
    isReading[course] = false;
    return true;
  }
  return Object.keys(hashMap).every(course => canRead(course));
};
// @lc code=end
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
);
