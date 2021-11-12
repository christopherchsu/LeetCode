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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    var queue = [];
    queue.push([0, root]);
    result.push([]);
    var level = 1;
    while (queue.length > 0) {
        var cur = queue.shift();
        if (cur[1] !== null) {
            result[cur[0]].push(cur[1].val);   
            queue.push([cur[0] + 1, cur[1].left]);
            queue.push([cur[0] + 1, cur[1].right]);
            if (cur[0] + 1 >= result.length) {
                result.push([]);
            }
        }
    }
    if (result[result.length - 1].length === 0) {
        result.pop();
    }
    return result;
};