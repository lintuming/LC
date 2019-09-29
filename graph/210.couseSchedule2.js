const VISITING_CONTEXT = /*   */ 0b000001;
const VISITED_CONTEXT = /*    */ 0b000010;
function findCourseOrder(n, prerequisites) {
  const result = [];
  const graph = {};
  const contextMap = {};
  for (let [k, v] of prerequisites) {
    (graph[k] || (graph[k] = [])).push(v);
  }
  for (let i = 0; i < n; i++) {
    if (contextMap[i] & VISITED_CONTEXT) {
      continue;
    }
    if (!find(i)) {
      return [];
    }
  }
  function find(courseId) {
    if (contextMap[courseId] & VISITED_CONTEXT) {
      return true;
    }
    if (contextMap[courseId] & VISITING_CONTEXT) {
      return false;
    }
    const pr = graph[courseId];
    if (pr) {
      contextMap[courseId] |= VISITING_CONTEXT;
      for (let i = 0; i < pr.length; i++) {
        if (!find(pr[i])) {
          return false;
        }
      }
      contextMap[courseId] &= ~VISITING_CONTEXT;
      result.push(courseId);
    } else {
      result.push(courseId);
    }
    return !!(contextMap[courseId] |= VISITED_CONTEXT);
  }
  return result;
}
console.log(findCourseOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
