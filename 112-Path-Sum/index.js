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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function hasPath(root, sum, tmpSum) {
        if (!root) {
            return false
        }
        tmpSum += root.val

        if (root.left || root.right) {
            let hasLeftPath = hasPath(root.left, sum, tmpSum)
            let hasRightPath = hasPath(root.right, sum, tmpSum)
            return hasLeftPath || hasRightPath
        }

        return sum === tmpSum
    }
    return hasPath(root, sum, 0)
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(3)
root.right = new TreeNode(4)


console.log(hasPathSum(root, 3))