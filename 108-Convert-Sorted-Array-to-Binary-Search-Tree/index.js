/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
     function sortedArrayToBSTRec(nums, start, end) {
         if (start > end) {
             return null
         }
         let mid = Math.floor((end + start) / 2)
         let root = new TreeNode(nums[mid])
         root.left = sortedArrayToBSTRec(nums, start, mid - 1)
         root.right = sortedArrayToBSTRec(nums, mid + 1, end)
         return root
     }
     return sortedArrayToBSTRec(nums, 0, nums.length - 1)
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([1,2,3,4,5,6,7]))