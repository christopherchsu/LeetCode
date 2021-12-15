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
var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    var prev = {val: 0, next: head};
    var cur = head;
    var next = head.next;
    while (cur.next !== null) {
        while (next && cur.val === next.val) {
            next = next.next;
        }
        if (next !== cur.next) {
            if (head === cur && next !== prev.next) {
                head = next;
                cur = head;
                if (cur !== null) {
                    next = cur.next;
                }
            } else {
                prev.next = next;
                cur = prev.next;
            }   
        } else {
            prev = cur;
            cur = cur.next;
            next = next.next;
        }
        if (cur === null) {
            return head;
        }
    }
    return head;
};