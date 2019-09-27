function findProfit(prices) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let final = 0;
  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    min = Math.min(min, p);
    const profix = p - min;
    if (profix > max) {
      max = profix;
      let min2 = Number.MAX_VALUE;
      let max2 = Number.MIN_VALUE;
      for (let j = i; j < prices.length; j++) {
        min2 = Math.min(min2, prices[j]);
        max2 = Math.max(max2, prices[j] - min2);
        final = Math.max(final, max2 + max);
      }
    }
  }
  return final
}

console.log(findProfit([7,6,4,3,1]))