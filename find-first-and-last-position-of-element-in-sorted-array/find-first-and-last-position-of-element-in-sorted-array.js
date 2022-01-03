/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var low = findLow(nums, target);
    var high = findHigh(nums,target);
    if (nums[0] == target) {
        low = 0;
    }
    if (nums[nums.length - 1] === target) {
        high = nums.length - 1;
    }
    return [low, high];

};


var findLow = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low+high)/2);
        if (nums[mid] === target && nums[mid-1] < nums[mid]) {
            return mid;
        }
        if (nums[mid + 1] === target && nums[mid] < nums[mid + 1]) {
            return mid + 1;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


var findHigh = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low+high)/2);
        if (nums[mid] === target && nums[mid+1] > nums[mid]) {
            return mid;
        }
        if (nums[mid - 1] === target && nums[mid] > nums[mid - 1]) {
            return mid - 1;
        }
        if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}