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
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    var recurse = function(node, left) {
        if (node === null) {
            return;
        }
        if (node.left === null && node.right === null && left) {
            sum += node.val;
        }
        recurse(node.left, true);
        recurse(node.right, false);
    }
    recurse(root, false);
    return sum;
};