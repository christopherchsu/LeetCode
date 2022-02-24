/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return head;
    }
    var first = {next: head};
    var previous = first;
    var cur = head;
    while (cur) {
        if (cur.val === val) {
            previous.next = cur.next;
            cur = cur.next;
        } else {
            previous = cur;
            cur = cur.next;
        }
    }
    return first.next;
};