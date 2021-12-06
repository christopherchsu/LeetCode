/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        var idx = nums[i] - 1;
        if (i === idx || nums[i] === nums[idx]) {
            continue;
        }
        if (idx >= 0 && idx < nums.length) {
            var temp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = temp;
            i--;
        }        
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};