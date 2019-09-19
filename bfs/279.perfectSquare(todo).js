





//greedy not work
function bfs(target) {
  let max = Math.sqrt(target) | 0;
  let count = 0,
    rest = target;
  while (max !== 0) {
    if (rest - max * max >= 0) {
      rest -= max * max;
      count++;
    } else {
      max--;
    }
  }
  return count;

