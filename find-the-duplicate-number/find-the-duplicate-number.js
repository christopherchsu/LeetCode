/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        var idx = nums[i] - 1;
        if (idx === i) {
            continue;
        }
        if (nums[idx] === idx + 1) {
            return nums[idx];
        } else {
            var temp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = temp;
            i--;
        }
    }
    
};