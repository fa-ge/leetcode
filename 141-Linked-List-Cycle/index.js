/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let oneSpeedPointer = head
    let twoSpeedPointer = head

    while (twoSpeedPointer !== null) {
        oneSpeedPointer = oneSpeedPointer.next
        twoSpeedPointer = twoSpeedPointer.next
        if (twoSpeedPointer === null) {
            return false
        }
        twoSpeedPointer = twoSpeedPointer.next
        if (twoSpeedPointer === oneSpeedPointer) {
            return true
        }
    }
    return false
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = head
console.log(hasCycle(head))