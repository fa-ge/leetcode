/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = {}
    inorder.forEach((val, index) => map[val] = index)

    function buildTreeByOrder(inorder, start1, end1, postorder, start2, end2) {
        if (start1 > end1 || start2 > end2) {
            return null
        }
        let rootVal = postorder[end2]
        let rootValIndex = map[rootVal]
        let lLen = rootValIndex - start1
        let root = new TreeNode(rootVal)

        root.left = buildTreeByOrder(inorder, start1, rootValIndex - 1, postorder, start2, start2 + lLen - 1)
        root.right = buildTreeByOrder(inorder, rootValIndex + 1, end1, postorder, start2 + lLen, end2 - 1)

        return root
    }
    return buildTreeByOrder(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([4,2,5,1,6,3,7], [4,5,2,6,7,3,1]))