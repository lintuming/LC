function jumpGame(steps) {
  let min = Number.MAX_VALUE;
  function jump(idx, count) {
    if (idx === steps.length - 1) {
      return (min = Math.min(min, count));
    }
    if (idx >= steps.length) {
      return;
    }
    const jumpSteps = steps[idx];
    for (let i = 1; i <= jumpSteps; i++) {
      jump(idx + i, count + 1);
    }
  }
  jump(0, 0);
  return min;
}

function jumpGameGreedy(steps) {
  let current = 0,
    i = 0,
    res = 0,
    n = steps.length - 1;
  while (current < n) {
    ++res;
    const prev = current;
    for (; i <= prev; i++) {
      current = Math.max(current, steps[i] + i);
    }
    //只能停留在原地
    if (prev === current) return -1;
  }
  return res;
}

console.log(jumpGameGreedy([2, 1, 3, 1, 1, 4, 5]));
