/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = i;
        } else {
            if (i - hashMap[nums[i]] <= k) {
                return true;
            }
            hashMap[nums[i]] = i;
        }
    }
    return false;
};