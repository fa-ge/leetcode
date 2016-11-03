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
var isBalanced = function(root) {
    function DepthDiff(root) {
        if (!root) return 0

        let lDep = DepthDiff(root.left)
        if (lDep === -1) return -1

        let rDep = DepthDiff(root.right)
        if (rDep === -1) return -1

        if (Math.abs(lDep - rDep) > 1) return -1

        return Math.max(lDep, rDep) + 1
    }

    return DepthDiff(root) === -1 ? false : true
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.right = new TreeNode(2)


console.log(isBalanced(root))