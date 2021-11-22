/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hashMap = {};
    for (var i = 0; i < nums.length; i++){
        if (hashMap.hasOwnProperty(nums[i]) === false){
            hashMap[nums[i]] = 1;
        }else{
            hashMap[nums[i]] += 1;
        }
        if (hashMap[nums[i]] > nums.length/2) {
            return nums[i];
        }
    }
};