function sumRange(num) {
  const cache = {};
  return function(i, j) {
    const key = `${i}:${j}`;
    if (cache[key]) {
      return cache[key];
    }
    let sum = 0;
    for (let k = i; k <= j; k++) {
      sum = sum + num[k];
    }
    cache[key] = sum;
    return sum;
  };
}

console.log(sumRange([-2, 0, 3, -5, 2, -1])(1, 2));
