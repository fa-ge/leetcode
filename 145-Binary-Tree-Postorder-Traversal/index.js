/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = []
    const res = []

    while (stack.length !== 0 || root) {
        while (root && !root.isVisited) {
            stack.push(root)
            root = root.left
        }
        let stackTop = stack[stack.length - 1]
        if (!stackTop) {
            break
        }
        if (stackTop.isVisited) {
            res.push(stackTop.val)
            root = stack.pop()
        } else {
            stackTop.isVisited = true
            root = stackTop.right
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
root.left.left.right = new TreeNode(8)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)


console.log(postorderTraversal(root))