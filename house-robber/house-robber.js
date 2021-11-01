/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var profit = [];
    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            profit.push(nums[i]);
        } else if (i === 1) {
            profit.push(Math.max(profit[i-1], nums[i]));
        } else {
            profit.push(Math.max(nums[i] + profit[i-2], profit[i-1]));
        }
    }
    return profit[nums.length - 1];
};