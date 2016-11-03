/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    let lDep = minDepth(root.left)
    let rDep = minDepth(root.right)
    if (lDep === 0 && rDep === 0) {
        return 1
    }
    if (lDep === 0) {
        lDep = Infinity
    }
    if (rDep === 0) {
        rDep = Infinity
    }
    return Math.min(lDep, rDep) + 1
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.right = new TreeNode(2)


console.log(minDepth(root))