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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
var isSameTree = function(p, q) {    
    if (p === null && q === null){
        return true;
    }
    if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)){
        return false;
    }
    
    
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
    
};

    if (isSameTree(root, subRoot)) {
        return true
    } else {
        if (root === null) {
            return false
        } else {
            return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
        }
    }
};