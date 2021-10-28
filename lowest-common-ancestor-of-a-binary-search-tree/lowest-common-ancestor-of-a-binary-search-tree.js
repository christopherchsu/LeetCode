/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while ((root.val >= p.val && root.val >= q.val) || (root.val <= q.val && root.val <= p.val)) {
        var parent = root;
        if (root.val === p.val || root.val === q.val) {
            return root;
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            return parent;
        }
    }
    return root;
    
};


// var isDescendent = function(root, node) {
//     if (root === null) {
//         return false;
//     }
//     if (root.val === node.val) {
//         return true;
//     } else {
//         return isDescendent(root.right, node) || isDescendent(root.left, node);
//     }
// }