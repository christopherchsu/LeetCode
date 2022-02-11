/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = [i];
        } else {
            hashMap[nums[i]].push(i);
            var length = hashMap[nums[i]].length;
            if (hashMap[nums[i]][length - 1] - hashMap[nums[i]][length - 2] <= k) {
                return true;
            }
        }
    }
    return false;
};