/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.push(-1);
    for (var i = 0; i < nums.length; i++) {
        var idx = nums[i];
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
        if (nums[i] !== i) {
            return i;
        }
    }
};