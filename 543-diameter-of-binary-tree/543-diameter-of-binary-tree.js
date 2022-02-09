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
var diameterOfBinaryTree = function(root) {
    var diameter = 0;
    var recurse = function(node) {
        if (node === null) {
            return 0;
        }
        var left = recurse(node.left);
        var right = recurse(node.right);
        diameter = Math.max(diameter , left + right);
        return Math.max(left + 1, right + 1);
    }
    recurse(root);
    return diameter;
};