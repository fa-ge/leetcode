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
    let queue = [root]
    let n = 0
    while (queue.length !== 0) {
        let tmpQueue = []
        while (root = queue.pop()) {
            if (root.left || root.right) {
                root.left && tmpQueue.push(root.left)
                root.right && tmpQueue.push(root.right)
            } else {
                return n + 1
            }
        }
        queue = tmpQueue
        n++
    }
    return n
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.right = new TreeNode(2)


console.log(minDepth(root))