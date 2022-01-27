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
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    var result = [];
    var flipped = false;
    var curDepth = 0;
    var curLevel = []; 
    var queue = [[root, 0]];
    while (queue.length !== 0) {
        var cur = queue.shift();
        if (cur[1] !== curDepth) {
            if (flipped) {
                result.push(curLevel.reverse());
            } else {
                result.push(curLevel);
            }
            flipped = !flipped;
            curDepth = cur[1];
            curLevel = [];
        }
        curLevel.push(cur[0].val);
        if (cur[0].left) {
            queue.push([cur[0].left, cur[1] + 1]);
        }
        if (cur[0].right) {
            queue.push([cur[0].right, cur[1] + 1]);
        }
        
    }
    if (flipped) {
        result.push(curLevel.reverse());
    } else {
        result.push(curLevel);
    }
    return result;
};