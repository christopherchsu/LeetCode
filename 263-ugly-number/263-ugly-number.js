/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    var arr = [2,3,5];
    var idx = 0;
    while(n > 1 && idx < arr.length) {
        if (n % arr[idx] === 0) {
            n = n / arr[idx];
        } else {
            idx++;
        }
    }
    if (n !== 1) {
        return false;
    }
    return true;
};