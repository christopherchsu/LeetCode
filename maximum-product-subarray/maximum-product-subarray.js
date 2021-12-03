/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = nums[0];
    var prevmin = 1;
    var prevmax = 1;
    for (let i = 0; i < nums.length; i++) {
        var vals = [nums[i], nums[i]*prevmin, nums[i]*prevmax]
        prevmax = Math.max(...vals);
        prevmin = Math.min(...vals);
        max = Math.max(max, prevmax);
    }
    return max;
};