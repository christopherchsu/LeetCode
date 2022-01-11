/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp.push([arr[i], Math.abs(arr[i] - x)]);
    }
    temp.sort((a,b) => {
        if (a[1] < b[1]) {
            return -1
        }
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1
        } else {
            return 1;
        }
    })
    var result = [];
    for (var i = 0; i < k; i++) {
        result.push(temp[i][0]);
    }
    result.sort((a,b) => {
        return a - b;
    })
    return result;
};