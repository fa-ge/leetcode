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
var rightSideView = function(root) {
    const res = []

    if (!root) {
        return []
    }

    let queue = [root]
    while (queue.length !== 0) {
        let tmpQueue = []
        for (let i = 0, len = queue.length; i < len; i++) {
            root = queue.shift()
            if (i === 0) {
                res.push(root.val)
            }
            root.right && tmpQueue.push(root.right)
            root.left && tmpQueue.push(root.left)
        }
        queue = tmpQueue
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

console.log(rightSideView(root))