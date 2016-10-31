/**
 * Created by fage on 2016/10/31.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true
    if(!p || !q || p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const p = new TreeNode(1)
p.left = null
const node1 = p.right = new TreeNode(2)
node1.left = new TreeNode(3)

const q = new TreeNode(1)
q.left = null
const node2 = q.right = new TreeNode(2)
node2.left = new TreeNode(3)

console.log(isSameTree(p, q))