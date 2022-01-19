/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var numTree = new Array(n + 1);
    numTree[0] = 1;
    numTree[1] = 1;
    for (var i = 2; i <= n; i++) {
        total = 0;
        for (var j = 1; j <= i; j++) {
            total += numTree[j - 1] * numTree[i-j];
        }
        numTree[i] = total;
    }
    return numTree[n];
};