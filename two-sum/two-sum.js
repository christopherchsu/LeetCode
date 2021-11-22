/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++){
        hashMap[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++){
        if (hashMap.hasOwnProperty(target-nums[i]) && hashMap[target-nums[i]] !== i){
            return [i, hashMap[target-nums[i]]];
        }
    }
    return []
};