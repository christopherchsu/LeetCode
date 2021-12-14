/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]] += 1;
        }
    }
    var result = [];
    for (var key in hashMap) {
        result.push([parseInt(key), hashMap[key]]);        
    }
    result.sort((a,b) => {
        return b[1] - a[1];
    })
    var topK = [];
    for (var i = 0; i < k; i++) {
        topK.push(result[i][0]);
    }
    return topK;
};