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
  function reconstructImpl(airport) {
    const tos = graph[airport];
    if (!tos) {
      result.push(airport);
      return;
    }
    for (let i = 0; i < tos.length; i++) {
      const to = tos[i];
      const line = `${airport}->${to}`;
      if (flied[line]) {
        continue;
      } else {
        flied[line] = true;
        result.push(airport);
        return reconstructImpl(to);
      }
    }
    result.push(airport);
  }
  reconstructImpl(begin);
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
