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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var recurse = function(node) {
        if (node === null) {
            return;
        } else {
            recurse(node.left);
            recurse(node.right);
            if (node.left !== null) {
                var left = node.left;
                while (left && left.right) {
                    left = left.right
                }
                left.right = node.right;
                node.right = node.left;
                node.left = null;
            }
        }
    }
    recurse(root);
    
};