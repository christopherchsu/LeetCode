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
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var recurse = function(node, depth) {
        if (node === null) {
            return Infinity;
        }
        if (node.left === null && node.right === null) {
            return depth + 1;
        } else {
            return Math.min(recurse(node.left, depth + 1), recurse(node.right, depth + 1));
        }
    }
    return recurse(root,0)
};