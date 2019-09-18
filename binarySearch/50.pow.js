function pow(x, n) {
  if (n === 0) return 1;
  const p = Math.abs(n);
  const result = p % 2 === 0 ? pow(x * x, n / 2) : pow(x * x, (p - 1) / 2) * x;
  return n > 0 ? result : -1 / result;
}
