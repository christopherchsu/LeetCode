/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => {
        return a[0]-b[0]
    })
    var index = 0;
    while (index < intervals.length - 1) {
        if (intervals[index][1] >= intervals[index+1][1] && intervals[index][0] <= intervals[index + 1][0]) {
            intervals.splice(index + 1, 1);
        } else if (intervals[index][1] >= intervals[index + 1][0] && intervals[index][0] >= intervals[index+1][0]) {
            intervals[index][1] = intervals[index + 1][1];
            intervals[index][0] = intervals[index+1][0];
            intervals.splice(index + 1, 1);
        } else if (intervals[index][1] >= intervals[index + 1][0] && intervals[index][0] <= intervals[index+1][0]) {
            intervals[index][1] = intervals[index + 1][1];
            intervals.splice(index + 1, 1);
        } else {
            index += 1;
        }
    }
    return intervals;
};