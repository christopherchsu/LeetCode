/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var answers = [];
    for (var i = 0; i < nums.length; i++) {
        var cur = 1;
        for (var j = 0; j < nums.length; j++) {
            if (j !== i) {
                cur = cur*nums[j];
            }
        }
        answers.push(cur);
    }
    return answers
};