/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    var queue = [[1, root]];
    var result = [];
    while (queue.length !== 0) {
        var cur = queue.shift();
        if (cur[1].left) {
           queue.push([cur[0] + 1, cur[1].left])        
        }
        if (cur[1].right) {
            queue.push([cur[0] + 1, cur[1].right])        
        }
        if (queue[0] && queue[0][0] === cur[0] + 1) {
            result.push(cur[1].val);
        }
    }
    result.push(cur[1].val);
    return result;
};