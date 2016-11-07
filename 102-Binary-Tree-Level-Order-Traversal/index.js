/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }

    let queue = [root]
    const res = []
    let n = 0
    while (queue.length !== 0) {
        let tmpQueue = []
        res[n] = []
        while (root = queue.shift()) {
            res[n].push(root.val)
            root.left && tmpQueue.push(root.left)
            root.right && tmpQueue.push(root.right)
        }
        queue = tmpQueue
        n++
    }
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
const node1 = root.right = new TreeNode(2)
node1.left = new TreeNode(3)

console.log(levelOrder(root))