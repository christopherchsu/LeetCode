/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function(head) {
    var reverse = null;
    var reversePrev = null;
    while (head) {
        reverse = head;
        head = head.next;
        reverse.next = reversePrev
        reversePrev = reverse;
    }
    return reverse;
};
