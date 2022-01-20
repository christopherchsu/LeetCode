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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    var result = [];
  var recurse = function(node, sum, path) {
      if (node === null) {
          return;
      }
      sum += node.val;
      path.push(node.val);
      if (node.left === null && node.right === null && sum === targetSum) {
          result.push(path.slice());
      } 
      if (node.left) {
          recurse(node.left, sum, path);
          path.pop();
      }
      if (node.right) {
        recurse(node.right, sum, path);
        path.pop();
      }
  }
  recurse(root, 0, []);
    return result
};