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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    var result = 0;
    var maxDepth = 0;
    var recurse = function(root, depth) {
        if (root === null) {
            return
        }
        if (depth > maxDepth) {
            maxDepth = depth;
            result = 0;
        }
        if (depth === maxDepth && root.left === null && root.right === null) {
            result += root.val
        } else {
            recurse(root.left, depth + 1);
            recurse(root.right, depth + 1);
        }
    }
    recurse(root, 0);
    return result;
};