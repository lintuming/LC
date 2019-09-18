function sqrt(n) {
  let left = 1,
    right = ((n / 2) | 0) + 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (mid * mid === n) {
      return mid;
    }
    if (mid * mid < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
