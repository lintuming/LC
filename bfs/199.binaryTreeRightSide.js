

function bfs(tree) {
  const result = [tree[0]];
  const stack = [0];
  while (stack.length) {
    const buffer = [];
    while (stack.length) {
      const c = stack.shift();
    
        const left = c * 2 + 1,
          right = c * 2 + 2;
        if (tree[left]||tree[left]===0) {
          buffer.push(tree[left]);
        }
        if (tree[right]||tree[left]===0) {
          buffer.push(tree[right]);
        }

    }
    buffer.length && result.push(buffer[buffer.length - 1]);
    stack.push(...buffer);
  }
  return result;
}
console.log(bfs([1, 2, 3, null, 5, null, 4])); //1,3,4
