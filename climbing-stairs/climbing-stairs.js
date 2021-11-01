/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i === 1) {
            result.push(1);
        } else if (i === 2) {
            result.push(2);
        } else {
            result.push(result[i-3] + result[i-2]);
        }
    }
    return result[n-1];
};