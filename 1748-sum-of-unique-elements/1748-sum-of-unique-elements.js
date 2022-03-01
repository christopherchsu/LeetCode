/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var sum = 0;
    var hashMap = {};
    for (var i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = 1;
            sum += nums[i];
        } else if (hashMap[nums[i]] === 1){
            sum -= nums[i]
            hashMap[nums[i]] += 1;
        } else {
            continue;
        }
    }
    return sum;
};