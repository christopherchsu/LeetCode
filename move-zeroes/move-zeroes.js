/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroes = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (i === nums.length - zeroes) {
                break;
            }
            zeroes++;
            var idx = i;
            while (idx + 1 !== nums.length) {
                var temp = nums[idx];
                nums[idx] = nums[idx + 1];
                nums[idx + 1] = temp;
                idx += 1;
            }
            i--;
        }
    }
    return nums;
};