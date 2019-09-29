/**
 * Use `bitMask` to represent some states,but actually it's not necessary,just have a tast of bitMask.
 */
const VISITING_CONTEXT = /*   */ 0b000001;
const VISITED_CONTEXT = /*    */ 0b000010;
const NOCONTEXT = /*          */ 0b000000;
function canFinishAllCourse(labels, prerequisites) {
  const map = {};
  const preRequisites = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const [courseId, required] = prerequisites[i];
    (preRequisites[courseId] || (preRequisites[courseId] = [])).push(required);
  }
  for (let j in preRequisites) {
    if (!findCourse(j)) {
      return false;
    }
  }
  return true;
  function findCourse(courseId) {
    const pres = preRequisites[courseId] || [];
    if (map[courseId] & VISITED_CONTEXT) return true;
    if (map[courseId] & VISITING_CONTEXT) return false;
    map[courseId] |= VISITING_CONTEXT;
    for (let i = 0; i < pres.length; i++) {
      if (!findCourse(pres[i])) {
        return false;
      }
    }
    map[courseId] &= ~VISITING_CONTEXT;
    return !!(map[courseId] |= VISITED_CONTEXT);
  }
}

console.log(canFinishAllCourse(2, [[1, 2], [0, 1]]));
