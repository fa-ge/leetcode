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
var inorderTraversal = function(root) {
    const stack = []
    const res = []

    while (root || stack.length !== 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        let tmp = stack.pop()
        res.push(tmp.val)
        root = tmp.right
    }
    return res
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = null
const node1 = root.right = new TreeNode(2)
node1.left = new TreeNode(3)

console.log(inorderTraversal(root))