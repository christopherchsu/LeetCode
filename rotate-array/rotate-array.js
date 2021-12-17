/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = new Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        var idx = i + k;
        while (idx >= nums.length) {
            idx = idx - nums.length;
        }
        arr[idx] = nums[i];
    } 
    for (var i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};