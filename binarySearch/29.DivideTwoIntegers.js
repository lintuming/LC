function solution(dividend, divisor) {
  if (divisor === 0) return 0;
  let i = 0;
  const prefix =
    (dividend > 0 && divisor < 0) || (divisor > 0 && dividend < 0) ? "-" : "";
  divisor = Math.abs(divisor);
  while ((dividend -= divisor) >= 0) {
    i++;
  }
  return parseInt(prefix + (i + ""));
}
