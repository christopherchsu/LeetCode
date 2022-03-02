/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
        if (root === null) {
        return root;
    }
    var queue = [[root, 0]];
    while (queue.length !== 0) {
        cur = queue.shift();
        if (cur[0].left) {
            queue.push([cur[0].left, cur[1] + 1]);
        }
        if (cur[0].right) {
            queue.push([cur[0].right, cur[1] + 1]);
        }
        if (queue[0] !== undefined && queue[0][1] === cur[1]) {
            cur[0].next = queue[0][0];
        } else {
            cur[0].next = null;
        }
    }
    return root;
};