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
 * @return {boolean}
 */
var isBalanced = function(root) {
    var isBal = true;
    var dfs = function(node) {
        if (node === null) {
            return 0;
        }
        var left = 1 + dfs(node.left);
        var right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) {
            isBal = false;
        }
        return Math.max(left, right);
    }
    dfs(root);
    return isBal
};