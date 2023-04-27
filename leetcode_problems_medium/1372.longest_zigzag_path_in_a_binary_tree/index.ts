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

function longestZigZag(root: TreeNode | null): number {
  let maxLen: number = 0;

  const dfs = (node: TreeNode | null, direction: string, length: number) => {
    if (!node) return;

    maxLen = Math.max(maxLen, length);

    if (direction === 'right') {
      dfs(node.right, 'left', length + 1);
      dfs(node.left, 'right', 1);
    } else {
      dfs(node.left, 'right', length + 1);
      dfs(node.right, 'left', 1);
    }
  };

  dfs(root, 'right', 0);

  return maxLen;
}
