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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var split = function(head) {
    var slow = head;
    var fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var left = head;
    var right = slow.next;
    slow.next = null;
    return [left, right];
}
    
var merge = function(root, left, right) {
    var cur = root;
    while (left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
            cur = cur.next;
        } else {
            cur.next = right;
            right = right.next;
            cur = cur.next;
        }
    }
    if (left) {
        cur.next = left;
    } else {
        cur.next = right;
    }
    return root.next;
}

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var [left, right] = split(head);
    var root = new ListNode(null);
    return merge(root, sortList(left), sortList(right));
    
};
