/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = 1;
    }
    var smallest = 1;
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[smallest] === undefined) {
            return smallest;
        } else {
            smallest += 1;
        }
    }
    return smallest;
};