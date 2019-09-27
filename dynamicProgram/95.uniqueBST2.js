function TreeNode(v) {
  this.value = v;
  this.left = null;
  this.right = null;
}

function uniqueBST(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  function generator(children) {
    let result = [];
    if (children.length === 0) {
      return [null];
    }
    if (children.length === 1) {
      return [new TreeNode(children[0])];
    }
    for (let k = 0; k < children.length; k++) {
      const left = generator(children.slice(0, k));
      const right = generator(children.slice(k + 1));
      for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
          const node = new TreeNode(children[k]);
          node.left = left[i];
          node.right = right[j];
          result.push(node);
        }
      }
    }
    return result;
  }
  return generator(arr);
}

console.log(uniqueBST(3));
