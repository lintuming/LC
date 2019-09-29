
function uglyNum(nth) {
  const uglyFactors = [2, 3, 5];
  const n = [1];
  let idx = 1,
    num = 2;
  while (n.length !== nth) {
    if (uglyFactors.some(uglyFactor => num % uglyFactor === 0)) {
      n[idx] = num;
      idx++;
    }
    num++;
  }
  return n[nth - 1];
}

console.log(uglyNum(11));
