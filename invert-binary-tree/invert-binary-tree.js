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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return root;
    }
    if (root.left === null && root.right === null) {
        return root;
    } else {
        if (root.right) {
            invertTree(root.right);
        }
        if (root.left) {
            invertTree(root.left);
        }
        var temp = root.right;
        root.right = root.left;
        root.left = temp;
        return root;
    }
};