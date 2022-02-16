/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' '); 
    if (pattern.length !== s.length) {
        return false;
    }
    var hashMap = {};
    var wordMap = {};
    for (var i = 0; i < s.length; i++) {
        if (wordMap[pattern[i]] === undefined && hashMap[s[i]] === undefined) {
            wordMap[pattern[i]] = s[i];
            hashMap[s[i]] = pattern[i];
        } else {
            if (wordMap[pattern[i]] !== s[i] || hashMap[s[i]] !== pattern[i]) {
                return false;
            }
        }
    }
    return true;
};