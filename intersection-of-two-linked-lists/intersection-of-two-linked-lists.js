/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    var curA = headA;
    var curB = headB;
    while (curA !== curB) {
        if (curA === null) {
            curA = headB;
        } else {
            curA = curA.next;
        }
        if (curB === null) {
            curB = headA;
        } else {
            curB = curB.next;
        }
    }
    return curA;
};