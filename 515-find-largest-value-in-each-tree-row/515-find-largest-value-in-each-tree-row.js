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
var largestValues = function(root) {
    if (root === null) {
        return [];
    }
    var hashMap = {};
    var queue = [[0, root]];
    while (queue.length !== 0) {
        var node = queue.shift();
        if (node[1].left) {
            queue.push([node[0] + 1, node[1].left]);
        }
        if (node[1].right) {
            queue.push([node[0] + 1, node[1].right]);
        }
        if (hashMap[node[0]] === undefined) {
            hashMap[node[0]] = node[1].val;
        } else {
            if (hashMap[node[0]] < node[1].val) {
                hashMap[node[0]] = node[1].val;
            }
        }
    }
    return Object.values(hashMap);
};