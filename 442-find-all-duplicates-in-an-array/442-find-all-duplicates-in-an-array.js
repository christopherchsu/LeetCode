/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var idx = Math.abs(nums[i]) - 1;
        if (nums[idx] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }
    return result;
};