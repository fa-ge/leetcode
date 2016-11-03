/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const res = []
    function pathRe(root, tmpSum, eles) {
        if (!root) {
            return
        }
        tmpSum += root.val
        eles.push(root.val)

        if (root.left || root.right) {
            pathRe(root.left, tmpSum, eles.slice())
            pathRe(root.right, tmpSum, eles.slice())
            return
        }

        if (tmpSum === sum) {
            res.push(eles)
        }
    }
    pathRe(root, 0, [])
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)


console.log(pathSum(root, 3))