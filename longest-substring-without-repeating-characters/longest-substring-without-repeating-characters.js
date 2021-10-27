/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longestLength = 0;
    var findLongest = function(s) {
        var hash = {};
        var cur = 0;
        for (var i = 0; i < s.length; i++) {
            if (!hash.hasOwnProperty(s[i])) {
                hash[s[i]] = i;
                cur += 1;
            } else {
                break;
            }
        }
        if (cur > longestLength) {
            longestLength = cur;
        }
                
    }
    for (var i = 0; i < s.length; i ++) {
        findLongest(s.slice(i));
    }
    return longestLength;
};