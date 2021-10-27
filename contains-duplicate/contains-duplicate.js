/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};