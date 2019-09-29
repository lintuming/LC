{
  function cloneGraphBFS(node) {
    const created = {};
    const stack = [node];
    const done = {};
    let first = null;
    while (stack.length) {
      const originNode = stack.shift();
      const newNode =
        created[originNode.val] ||
        (created[originNode.val] = new Node(originNode.val));
      if (!first) {
        first = newNode;
      }
      for (let i = 0; i < originNode.neighbors.length; i++) {
        const { val } = originNode.neighbors[i];
        const newNeighbor = created[val] || (created[val] = new Node(val));
        newNode.neighbors.push(newNeighbor);
        if (!done[val] && done[val] !== "isSet") {
          stack.push(originNode.neighbors[i]);
          done[val] = "isSet";
        }
      }
      done[originNode.val] = true;
    }
    return first;
  }

  function cloneGraphDFS(node) {
    const map = {};
    function traverse(node) {
      if (!node) return node;
      if (!map[node.val]) {
        map[node.val] = new Node(node.val);
        map[node.val].neighbors = node.neighbors.map(traverse);
      }
      return map[node.val];
    }
    return traverse(node)
  }
  function Node(val) {
    this.val = val;
    this.neighbors = [];
  }
  const g = {
    1: [2, 4],
    2: [1, 3],
    3: [2, 4],
    4: [1, 3],
    first: 1
  };
  function constructGraph(g) {
    const keys = Object.keys(g);
    const nodes = keys.reduce((o, k) => {
      o[k] = new Node(k);
      return o;
    }, {});
    keys.forEach(key => {
      const neighbors = g[key];
      let len = neighbors.length;
      while (neighbors[--len]) {
        const n = neighbors.shift();
        nodes[key].neighbors.push(nodes[n]);
      }
    });
    return nodes[g.first];
  }
  const source = constructGraph(g);
  console.log(cloneGraphDFS(source));
}
