/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var min = 0;
    var max = nums.length - 1;
    if (nums[min] <= nums[max]) {
        return nums[min];
    }
    while (min < max) {
        var mid = Math.floor((min + max) / 2);
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[max]) {
            max = mid - 1;
        }
        if (nums[min] < nums[mid]) {
            min = mid + 1;
        }
    }
};