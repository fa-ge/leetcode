/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root
    }
    let queue = [root]
    let invertRoot = new TreeNode(root.val)
    const res = invertRoot
    let invertQueue = [invertRoot]
    while (root = queue.shift()) {
        invertRoot = invertQueue.shift()
        if (root.left) {
            queue.push(root.left)
            invertRoot.right = new TreeNode(root.left.val)
            invertQueue.push(invertRoot.right)
        }
        if (root.right) {
            queue.push(root.right)
            invertRoot.left = new TreeNode(root.right.val)
            invertQueue.push(invertRoot.left)
        }
    }
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log(invertTree(root))