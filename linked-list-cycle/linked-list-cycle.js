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
    if (head === null) {
        return false;
    }
    var walk = head;
    var run = head;
    while (run !== null) {
        walk = walk.next;
        run = run.next;
        if (run !== null) {
            run = run.next;        
        } else {
            break;
        }
        if (walk === run) {
            return true;
        }
    }
    return false;
};