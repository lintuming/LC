function bfs(tree) {
  const stack = [0],
    len = tree.length;
  outer: while (stack.length) {
    const buffer = [];
    while (stack.length) {
      const c = stack.shift(),
        d = stack.pop();
      if (c !== 0 && tree[c] !== tree[d]) {
        return false;
      }
      if (c * 2 + 1 >= len) {
        break outer;
      }
      if (c >= 0) {
        buffer.push(c * 2 + 1, c * 2 + 2);
      }
      if (d >= 0) {
        buffer.push(d * 2 + 1, d * 2 + 2);
      }
    }
    stack.push(...buffer);
  }
  return true;
}

console.log(bfs([1, 2, 2, 3, null, null, 3]));
