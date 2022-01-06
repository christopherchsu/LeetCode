/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    var nums = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length === 0) {
            nums++;
            continue;
        }
        var sIdx = 0;
        var idx = 0;
        while (sIdx < s.length) {
            if (words[i][idx] === s[sIdx]) {
                idx++;
            }
            if (idx === words[i].length) {
                nums++;
                break;
            }
            sIdx++;
        }
    }
    return nums;
};