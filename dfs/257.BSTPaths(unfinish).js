function genPath(tree) {
  const result = [];
  function search(current, prevPath) {
    const left = current * 2 + 1,
      right = current * 2 + 2;
    const path = prevPath?prevPath + `->${tree[current]}`:`${tree[current]}`;
    if (!tree[left] && tree[left] !== 0 && !tree[right] && tree[right] !== 0) {
      result.push(path);
      return;
    }
    search(left, path);
    search(right, path);
  }
  search(0, "");
  return result;
}

console.log(genPath([1, 2, 3, null, 5]));
