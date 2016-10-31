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
    if (root) {
        let left = root.left
        let right = root.right
        const leftStack = []
        const rightStack = []
        while (left || (leftStack.length !== 0) || right || (rightStack.length !== 0)) {
            while (left || right) {
                if (!left || !right || left.val !== right.val) {
                    return false
                }
                leftStack.push(left)
                left = left.left
                rightStack.push(right)
                right = right.right
            }

            left = leftStack.pop()
            left = left.right
            right = rightStack.pop()
            right = right.left
        }
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