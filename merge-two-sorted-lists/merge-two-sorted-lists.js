/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = {val: -1, next: null};
    if (l1 === null && l2 === null){
        return head.next;
    }else if(l1 === null){
        var cur = l2;
        l2 = l2.next;
        head.next = cur;
        return head.next;
    }else if (l2 === null){
        var cur = l1;
        l1 = l1.next;
        head.next = cur;
        return head.next;
    }
    
    if (l1.val <= l2.val){
        var cur = l1;
        l1 = l1.next;
    }else{
        var cur = l2;
        l2 = l2.next;
    }
    head.next = cur;
    
    while (l1 !== null && l2 !== null){
        if (l1.val <= l2.val){
            cur.next = l1;
            l1 = l1.next;
            cur = cur.next;
        }else{
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }
    }
    if (l1 === null){
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }else if (l2 === null){
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }
    return head.next;
};