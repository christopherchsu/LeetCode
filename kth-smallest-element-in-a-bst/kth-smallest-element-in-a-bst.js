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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var result = [];
    var recurse = function(root) {
        if (root === null) {
            return;
        } else {
            recurse(root.left);
            result.push(root.val);
            recurse(root.right);
        }
    }
    recurse(root);
    return(result[k-1])
};