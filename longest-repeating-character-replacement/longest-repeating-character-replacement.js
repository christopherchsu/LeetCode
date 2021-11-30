/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var l = 0;
    var r = 0;
    var res = 1;
    var counts = {};
    counts[s[r]] = 1;
    while (r < s.length) {
        if (r - l + 1 - Math.max(...Object.values(counts)) <= k) {
            if (r-l+1 > res) {
                res = r - l + 1;
            }
            r += 1;
            if (counts[s[r]]) {
                counts[s[r]] += 1;   
            } else {
                counts[s[r]] = 1;
            }

        } else {
            counts[s[l]] -= 1;
            l += 1;
        }
    }
    return res;
};