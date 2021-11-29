/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    })
    var res = 0;
    var prevEnd = intervals[0][1]
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= prevEnd) {
            prevEnd = intervals[i][1];
        } else {
            prevEnd = Math.min(prevEnd, intervals[i][1]);
            res += 1;
        }
    }
    return res;
};