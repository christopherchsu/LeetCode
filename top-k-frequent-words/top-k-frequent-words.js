/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var hashMap = {};
    for (var i = 0; i < words.length; i++) {
        if (hashMap[words[i]] === undefined) {
            hashMap[words[i]] = 1;
        } else {
            hashMap[words[i]] += 1;
        }
    }
    var arr = [];
    for (var key in hashMap) {
        arr.push([key, hashMap[key]]);
    }
    arr.sort((a,b) => {
        if (b[1] > a[1]) {
            return 1;
        } else if (b[1] < a[1]) {
            return -1;
        }
        if (b[0] > a[0]) {
            return -1;
        } else if (b[0] < a[0]){
            return 1;
        }
        return 0;
    })
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i][0])
    }
    return result.slice(0, k);
};