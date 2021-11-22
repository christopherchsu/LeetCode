/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => {
              return a - b
              });
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            continue;
        }
        var l = i + 1;
        var r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r -= 1;

            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l += 1;
            } else {
                result.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while (nums[l] === nums[l-1] && l < r) {
                    l += 1;
                }
            }
        }
    }
    return result;
};
