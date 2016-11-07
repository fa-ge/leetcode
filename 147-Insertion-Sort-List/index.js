/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const res = new TreeNode(-Infinity)
    res.next = null

    while (head !== null) {
        let pre = res

        while (pre.next && head.val > pre.next.val) {
            pre = pre.next
        }

        let tmpHead = head.next
        head.next = pre.next
        pre.next = head
        head = tmpHead
    }

    return res.next
};

function TreeNode(val) {
    this.val = val;
    this.next = null;
}

let root = new TreeNode(3)
root.next = new TreeNode(2)
root.next.next = new TreeNode(4)
root.next.next.next = new TreeNode(1)

console.log(insertionSortList(root))