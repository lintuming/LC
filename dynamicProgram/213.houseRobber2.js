function robMoney(houses) {
  let max = Number.MIN_VALUE;
  function rob(houses, sum, fromFirst) {
    if (houses.length === 0) {
      return (max = Math.max(sum, max));
    }
    for (let i = 0; i < houses.length; i++) {
      const money = houses[i];
      rob(
        fromFirst && i === 0
          ? houses.slice(i + 2, houses.length - 1)
          : houses.slice(i + 2),
        sum + money
      );
    }
  }
  rob(houses, 0, true);
  return max;
}

console.log(robMoney( [1,2,3,1]))