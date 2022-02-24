/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    var i = Math.log10(n)/Math.log10(4);
    if (i % 1 === 0){
        return true;
    }
    return false;
};