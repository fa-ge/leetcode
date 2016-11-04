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
var sumNumbers = function(root) {
    let res = 0
    function dfs(root, sum) {
        if (!root) {
            return
        }
        sum += root.val
        if (root.left || root.right) {
            dfs(root.left, sum)
            dfs(root.right, sum)
            return
        }
        res += +sum

        return 0
    }
    dfs(root, '')
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.right = new TreeNode(3)


console.log(sumNumbers(root))

