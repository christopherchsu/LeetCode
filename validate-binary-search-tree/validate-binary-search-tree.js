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
var isValidBST = function(root) {
    var recurse = function(root, left, right) {
        if (root === null) {
            return true
        }
        else if (left < root.val && root.val < right) {
            return recurse(root.left, left, root.val) && recurse(root.right, root.val, right);
        } else {
            return false;
        }
    }
    return recurse(root, -Infinity, Infinity)
    
};