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
var sumNumbers = function(root) {
    var result = [];
    var recurse = function(node, sum) {
        if (node === null) {
            return;
        }
        sum = sum*10 + node.val;
        if (node.left === null && node.right === null) {
            result.push(sum);
        } else {
            recurse(node.left, sum);
            recurse(node.right, sum);
        }
    }
    recurse(root, 0);
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
};