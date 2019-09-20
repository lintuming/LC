function dfs(tree, target) {
  const result = [];
  const buffer = [];
  function search(current, sum) {
    const value = tree[current];
    buffer.push(value);
    const left = current * 2 + 1,
      right = current * 2 + 2;
    if (!tree[left] && !tree[right]) {
      if (sum + value === target) {
        result.push(buffer.slice());
      }
      buffer.pop();
      return;
    }
    search(left, sum + value);
    search(right, sum + value);
    buffer.pop();
  }
  search(0, 0);
  return result;
}
/**
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
*/
console.log(
  dfs([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1], 22)
);
