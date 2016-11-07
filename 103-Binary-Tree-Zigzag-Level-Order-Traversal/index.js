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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }

    let queue = [root]
    const res = []
    let n = 0
    while (queue.length !== 0) {
        let tmpQueue = []
        res[n] = []
        while (queue.length !== 0) {
            root = queue.shift()
            res[n].push(root.val)
            root.left && tmpQueue.push(root.left)
            root.right && tmpQueue.push(root.right)
        }
        queue = tmpQueue
        if (n % 2 !== 0) {
            res[n].reverse()
        }
        n++
    }
    return res
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// const root = new TreeNode(1)
// root.left = new TreeNode(9)
// const node1 = root.right = new TreeNode(20)
// node1.left = new TreeNode(15)
// node1.right = new TreeNode(7)

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log(zigzagLevelOrder(root))