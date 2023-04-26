/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  const clonedMap = new Map();

  function cloneNode(originalNode: Node) {
    if (!originalNode) return null;

    if (clonedMap.has(originalNode)) {
      return clonedMap.get(originalNode);
    }

    const clonedNode = new Node(originalNode.val);

    clonedMap.set(originalNode, clonedNode);

    originalNode.neighbors.forEach((neighbor: Node) => {
      const clonedNeighbor = cloneNode(neighbor);
      clonedNode.neighbors.push(clonedNeighbor);
    });

    return clonedNode;
  }

  return cloneNode(node);
}
