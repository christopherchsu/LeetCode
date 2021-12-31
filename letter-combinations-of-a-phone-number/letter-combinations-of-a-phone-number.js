/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return [];
    }
    var dict = {2:['a','b','c'],
               3:['d','e','f'],
               4:['g','h','i'],
               5:['j','k','l'],
               6:['m','n','o'],
               7:['p','q','r','s'],
               8:['t','u','v'],
               9:['w','x','y','z']};
    var result = [];
    var recurse = function(cur, idx) {
        if (cur.length === digits.length) {
            result.push(cur);
        } else {
            for (var i = 0; i < dict[digits[idx]].length; i++) {
                recurse(cur + dict[digits[idx]][i], idx + 1);
            }
        }
    }
    recurse('', 0);
    return result;
};