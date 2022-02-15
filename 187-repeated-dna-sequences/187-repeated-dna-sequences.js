/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var hashMap = {};
    for (var i = 0; i < s.length; i++) {
        if (i + 10 <= s.length) {
            if (hashMap[s.slice(i, i+10)] === undefined) {
                hashMap[s.slice(i, i+10)] = 1;
            } else {
                hashMap[s.slice(i, i+10)] += 1;
            }
        }
    }
    var result = [];
    for (var key in hashMap) {
        if (hashMap[key] >= 2) {
            result.push(key);
        }
    }
    return result;
};