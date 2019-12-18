/*
 * @lc app=leetcode id=630 lang=javascript
 *
 * [630] Course Schedule III
 */

// @lc code=start
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
  courses.sort((a, b) => a[1] - b[1]);
  let time = 0;
  const priorityQueue = [];
  function push(item) {
    if (
      priorityQueue.length === 0 ||
      item >= priorityQueue[priorityQueue.length - 1]
    ) {
      priorityQueue.push(item);
    } else {
      for (let i = 0; i < priorityQueue.length; i++) {
        if (item <= priorityQueue[i]) {
          priorityQueue.splice(i, 0, item);
          break;
        }
      }
    }
  }
  for (let i = 0; i < courses.length; i++) {
    time += courses[i][0];
    push(courses[i][0]);
    if (time > courses[i][1]) {
      time -= priorityQueue.pop();
    }
  }
  return priorityQueue.length;
};

// @lc code=end
console.log(
  scheduleCourse([
    [7, 17],
    [3, 12],
    [10, 20],
    [9, 10],
    [5, 20],
    [10, 19],
    [4, 18]
  ])
);
