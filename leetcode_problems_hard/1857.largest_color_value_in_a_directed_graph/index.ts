const getIndexColor = (char: string): number => {
  return char.charCodeAt(0) - 97;
};

function largestPathValue(colors: string, edges: number[][]): number {
  const graph: Record<number, Set<number>> = {};
  const graph2: Record<number, Array<number>> = {};
  for (const edge of edges) {
    if (graph[edge[1]] != null) {
      graph[edge[1]].add(edge[0]);
    } else {
      graph[edge[1]] = new Set([edge[0]]);
    }
    if (!graph[edge[0]]) {
      graph[edge[0]] = new Set();
    }
    if (graph2[edge[0]] != null) {
      graph2[edge[0]].push(edge[1]);
    } else {
      graph2[edge[0]] = [edge[1]];
    }
  }
  const memo = new Array(edges.length + 1)
    .fill(0)
    .map((_) => new Array(26).fill(0));
  let seen = new Set();
  let availablePathNodes = [];
  let ans = edges.length == 0 ? 1 : -1;

  // get the start nodes for
  for (const key in graph) {
    if (graph[key].size == 0) {
      availablePathNodes.push(Number(key));
      const colorIndex = getIndexColor(colors[Number(key)]);
      memo[Number(key)][colorIndex] = 1;
      ans = 1;
    }
  }

  // topological sorting
  while (availablePathNodes.length > 0) {
    const node = availablePathNodes.shift();
    if (graph2[node]) {
      for (const key of graph2[node]) {
        const colorIndex = getIndexColor(colors[Number(key)]);
        for (let i = 0; i < 26; i++) {
          memo[Number(key)][i] = Math.max(
            memo[Number(key)][i],
            memo[node][i] + (colorIndex == i ? 1 : 0)
          );
          ans = Math.max(ans, memo[Number(key)][colorIndex]);
        }
        graph[key].delete(node);
        if (graph[key].size == 0 && !seen.has(key)) {
          seen.add(key);
          availablePathNodes.push(Number(key));
        }
      }
    }
  }

  // check for cyclic graph
  // that is we still have an edge hanging
  for (const key in graph) {
    if (graph[key].size > 0) {
      return -1;
    }
  }
  return ans;
}
