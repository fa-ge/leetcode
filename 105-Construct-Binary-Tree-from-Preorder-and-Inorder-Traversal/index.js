/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = {}
    inorder.forEach((val, index) => map[val] = index)

    function buildTreeByOrder(preorder, start1, end1, inorder, start2, end2) {
        if (start1 > end1 || start2 > end2) {
            return null
        }
        let rootVal = preorder[start1]
        let rootValIndex = map[rootVal]
        let lLen = rootValIndex - start2
        let root = new TreeNode(rootVal)

        root.left = buildTreeByOrder(preorder, start1 + 1, start1 + lLen, inorder, start2, rootValIndex - 1)
        root.right = buildTreeByOrder(preorder, start1 + lLen + 1, end1, inorder, rootValIndex + 1, end2)

        return root
    }
    return buildTreeByOrder(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]))