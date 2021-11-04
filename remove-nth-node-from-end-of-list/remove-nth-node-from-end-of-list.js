/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var length = 0;
    var cur = head;
    while (cur) {
        length += 1;
        cur = cur.next;
    }
    if (length - n === 0) {
        head = head.next;
        return head;
    }
    var count = 0;
    var cur = head;
    while (cur) {
        count += 1;
        if (count === length - n) {
            cur.next = cur.next.next;
            return head;
        }
        cur = cur.next;
    }
};