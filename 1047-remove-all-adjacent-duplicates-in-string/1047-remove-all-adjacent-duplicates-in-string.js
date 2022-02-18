/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    var stack = [];
    var idx = 0;
    while (idx < s.length) {
        if (stack.length === 0) {
            stack.push(s[idx]);
        } else {
            var prev = stack.pop();
            if (s[idx] !== prev) {
                stack.push(prev);
                stack.push(s[idx]);
            }
        }
        idx++;
    }
    var res = stack.join('');
    return res;
};