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
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var max = 1;
    var recurse = function(node, depth) {
        if (depth > max) {
            max = depth;
        }
        if (node.left) {
            recurse(node.left, depth+1);
        }
        if (node.right) {
            recurse(node.right, depth+1);
        }
    }
    recurse(root, 1);
    return max;
};