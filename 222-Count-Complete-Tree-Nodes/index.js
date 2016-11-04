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
var countNodes = function(root) {
    let leftRoot = root
    let leftHeight = 0
    let rightRoot = root
    let rightHeight = 0

    while (leftRoot) {
        leftRoot = leftRoot.left
        leftHeight++
    }
    while (rightRoot) {
        rightRoot = rightRoot.right
        rightHeight++
    }
    if (leftHeight === rightHeight) {
        return 2 ** leftHeight - 1
    }
    return 1 + countNodes(root.left) + countNodes(root.right)
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log(countNodes(root))