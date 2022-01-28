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
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    var count = 1;
    var recurse = function(node) {
        if (node === null) {
            return;
        }
        if (node.left) {
            count += 1;
            recurse(node.left);
        }
        if (node.right) {
            count += 1;
            recurse(node.right);
        }
    }
    recurse(root);
    return count;
};