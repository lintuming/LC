function sum(tree) {
  let total = 0;
  function search(current, sum) {
    const val = tree[current];
    const left = current * 2 + 1,
      right = current * 2 + 2;
    const currentSum = sum * (current === 0 ? 0 : 10) + val;
    if (tree[left] === undefined && tree[right] === undefined) {
      return (total += currentSum);
    }
    search(left, currentSum);
    search(right, currentSum);
  }
  search(0, 0);
  return total;
}

console.log(sum([4, 9, 0, 5, 1]));//1026
