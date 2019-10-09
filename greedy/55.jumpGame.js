function jumpGameGreedy(steps) {
  let current = 0,
    i = 0,
    n = steps.length - 1;
  while (current < n) {
    const prev = current;
    for (; i <= prev; i++) {
      current = Math.max(current, steps[i] + i);
    }
    if (prev === current) return false;
  }
  return true;
}

console.log(jumpGameGreedy([3, 2, 1, 0, 4]));
