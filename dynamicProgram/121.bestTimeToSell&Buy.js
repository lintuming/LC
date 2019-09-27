function findMaxProfit(socks) {
  let max = Number.MIN_VALUE,
    min = Number.MAX_VALUE;
  for (let i = 0; i < socks.length; i++) {
    min = Math.min(socks[i], min);
    max = Math.max(max, socks[i] - min);
  }
  return max
}
console.log(findMaxProfit([7, 1, 4, 5, 6]))
