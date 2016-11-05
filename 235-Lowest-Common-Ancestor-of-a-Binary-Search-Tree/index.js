/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null
    }
    const queue = [root]
    while (root = queue.shift()) {
        if (root.val === p.val || root.val === q.val || (root.val > p.val && root.val < q.val) || (root.val < p.val && root.val > q.val)) {
            return root
        } else {
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
        }
    }
    return null
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)

console.log(lowestCommonAncestor(root, root.left, root.right))