/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isEqualLR(left, right) {
        if (!left && !right) return true
        if(!left || !right || left.val !== right.val) return false
        return isEqualLR(left.left, right.right) && isEqualLR(left.right, right.left)
    }
    if (root) {
        return isEqualLR(root.left, root.right)
    }
    return true
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = new TreeNode(3)

console.log(isSymmetric(p))