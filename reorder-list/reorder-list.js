/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var arr = [];
    var cur = head;
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    for (var i = 0; i < arr.length/2; i++) {
        if (i === 0) {
            head.next = arr[arr.length - 1 - i];
            head = head.next;
        } else {
            head.next = arr[i];
            head = head.next;
            head.next = arr[arr.length - 1 - i];
            head = head.next;
        }
    }
    head.next = null;
    
};