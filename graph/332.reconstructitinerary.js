function reconstruct(itineraries) {
  const begin = "JFK";
  const graph = {};
  for (let [k, v] of itineraries) {
    if (graph[k]) {
      if (graph[k][0].charCodeAt(2) > v.charCodeAt(2)) {
        graph[k].unshift(v);
      } else {
        graph[k].push(v);
      }
    } else {
      graph[k] = [v];
    }
  }
  const flied = {};
  const result = [];
  function reconstructImpl(from) {
    const tos = graph[fromn] || [];
    if (tos.length === 0) {
      return result.push(fromn);
    }
    const to = tos.shift();
    result.push(fromn);
    reconstructImpl(to);
  }
  reconstructImpl(begin);
  console.log(graph);
  return result;
}

console.log(
  reconstruct([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"]
  ])
);
