
//O(n) solution
function bestTime(prices) {
  let cur = 0,
    profit = 0,
    buy = Number.MAX_VALUE;
  while (cur <= prices.length - 1) {
    const price = prices[cur];
    if (buy > price) {
      buy = price;
    }
    if (price > buy) {
      profit += price - buy;
      buy = price;
    }
    cur++;
  }
  return profit;
}

console.log(bestTime([7,1,3,2,6,4]));
