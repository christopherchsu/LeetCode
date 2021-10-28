/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longestLength = 0;
    var left = 0;
    var hashMap = {};
    var curLength = 0;
    for (var i = 0; i < s.length; i++) {
        while (hashMap[s[i]]) {
            delete hashMap[s[left]];
            left++;
            curLength--;
        }
        hashMap[s[i]] = 1;
        curLength ++;
        if (curLength > longestLength) {
            longestLength = curLength;
        }
    }
    return longestLength;
};