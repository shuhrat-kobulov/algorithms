class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function widthOfBinaryTree(root: TreeNode | null): number {
  let positions: number[] = [0];
  let width: number = 0;

  function dfs(node: TreeNode | null, level: number, position: number) {
    if (!node) return;
    if (positions[level] === undefined) positions.push(position);

    let diff = position - positions[level];
    width = Math.max(width, diff + 1);

    dfs(node.left, level + 1, diff * 2);
    dfs(node.right, level + 1, diff * 2 + 1);
  }

  dfs(root, 0, 0);

  return width;
}
