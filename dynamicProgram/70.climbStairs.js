function climbStairs(total) {
  let ways = 0;
  const steps = [1, 2];
  function climb(restStairs) {
    if (restStairs === 0) {
      return ways++;
    }
    if (restStairs < 0) {
      return;
    }
    steps.forEach(step => climb(restStairs - step));
  }
  climb(total);
  return ways;
}

console.log(climbStairs(4));
