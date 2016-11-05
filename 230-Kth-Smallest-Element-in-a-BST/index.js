/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0
    let res
    function inOrder(root) {
        if (root) {
            inOrder(root.left)
            if (++n === k) {
                res = root.val
            }
            inOrder(root.right)
        }
    }
    inOrder(root)
    return res
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

console.log(kthSmallest(root, 2))