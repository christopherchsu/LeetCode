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
    var curA = headA;
    var curB = headB;
    while (curB !== null) {
        if (curA === null) {
            curA = headA;
            curB = curB.next;
        }
        if (curA === curB) {
            return curA;
        } else {
            curA = curA.next;
        }
    }
    return null;
};