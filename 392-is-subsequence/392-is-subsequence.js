/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }
    var sIdx = 0;
    var tIdx = 0;
    while (tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            sIdx++;
            if (sIdx === s.length) {
                return true;
            }
        }
        tIdx++;
    }
    return false;
};