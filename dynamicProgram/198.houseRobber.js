function maxProfit(houses) {
  let max = Number.MIN_VALUE;
  function rob(houses, sum) {
    if(houses.length===0){
      return max=Math.max(sum,max)
    }
    for (let i = 0; i < houses.length; i++) {
      const money = houses[i];
      rob(houses.slice(i + 2), sum + money);
    }
  }
  rob(houses,0)
  return max
}

console.log(maxProfit([2,7,9,3,1]))