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
var findBottomLeftValue = function(root) {
    var leftmost = null;
    var max = -1;
    var recurse = function(node, depth) {
        if (node === null) {
            return;
        }
        if (node.left === null && node.right === null) {
            if (depth > max) {
                max = depth;
                leftmost = node.val;
            }
            return;
        }
        recurse(node.left, depth + 1);
        recurse(node.right, depth + 1);
    }
    recurse(root, 0);
    return leftmost;
};