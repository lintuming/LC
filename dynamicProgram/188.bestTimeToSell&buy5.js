function bestprofit(prices, k) {
  let totalMax = Number.MIN_VALUE;

  function findprofit(prices, k, sum) {
    if (k === 0) {
      return (totalMax = Math.max(totalMax, sum));
    }
    k -= 1;
    let min = Number.MAX_VALUE,
      max = Number.MIN_VALUE;
    for (let i = 0; i < prices.length; i++) {
      const p = prices[i];
      min = Math.min(min, p);
      max = Math.max(max, p - min);
      findprofit(prices.slice(i), k, max + sum);
    }
  }
  findprofit(prices, k, 0);
  return totalMax;
}
console.log(bestprofit([3,2,6,5,0,3],2));
