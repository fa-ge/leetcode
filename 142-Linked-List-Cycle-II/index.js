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
var detectCycle = function(head) {
    let oneSpeedPointer = head
    let twoSpeedPointer = head

    while (twoSpeedPointer !== null) {
        oneSpeedPointer = oneSpeedPointer.next
        twoSpeedPointer = twoSpeedPointer.next
        if (twoSpeedPointer === null) {
            return null
        }
        twoSpeedPointer = twoSpeedPointer.next
        if (twoSpeedPointer === oneSpeedPointer) {
            oneSpeedPointer = head
            break
        }
    }
    if (twoSpeedPointer === null || twoSpeedPointer.next === null) {
        return null
    }
    while (oneSpeedPointer !== twoSpeedPointer) {
        oneSpeedPointer = oneSpeedPointer.next
        twoSpeedPointer = twoSpeedPointer.next
    }
    return oneSpeedPointer
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var head = new ListNode(1)
var second = new ListNode(2)
head.next = second
var thrid = new ListNode(3)
second.next = thrid
var four = new ListNode(4)
thrid.next = four
var five = new ListNode(5)
four.next = five
var six = new ListNode(6)
five.next = six
six.next = second
console.log(detectCycle(head))