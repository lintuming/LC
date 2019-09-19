function bfs(num, prerequisites) {
  const graph = {};
  const visiting = {};
  const visited = {};
  for (const [k, v] of prerequisites) {
    if (graph[k]) {
      graph[k].push(v);
    } else {
      graph[k] = [v];
    }
  }

  for (const k in graph) {
    if (search(k)) {
      return false;
    }
  }
  function search(k) {
    visiting[k] = true;
    const edges = graph[k];
    if (edges) {
      for (const p of edges) {
        if (visited[p]) {
          continue;
        }
        if (visiting[p]) {
          return true;
        }
        if (search(p)) {
          return true;
        }
      }
    }
    visiting[k] = false;
    visited[k] = true;
    return false;
  }
  return true;
}

console.log(bfs(2,[[0,1],[1,0]]))