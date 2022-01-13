/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var leftSum = new Array(nums.length);
    var rightSum = new Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        if (i === 0 ) {
            leftSum[i] = 0;
        } else {
            leftSum[i] = leftSum[i - 1] + nums[i - 1];
        }
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            rightSum[i] = 0;
        } else {
            rightSum[i] = rightSum[i + 1] + nums[i + 1];
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (leftSum[i] === rightSum[i]) {
            return i;
        }
    }
    return -1;
};