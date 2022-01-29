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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    var recurse = function(node, path) {
        if (node === null) {
            return;
        }
        if (path === '') {
            path = path + node.val.toString();
        } else {
            path = path + '->' + node.val.toString();
        }
        if (node.left === null && node.right === null) {
            result.push(path)
            return;
        }
        if (node.left) {
            recurse(node.left, path);
        }
        if (node.right) {
            recurse(node.right, path);
        }
    }
    recurse(root, '');
    return result;
};