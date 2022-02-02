/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var hashMap = {};
    for (var i = 0; i < nums1.length; i++) {
        hashMap[nums1[i]] = 1;
    }
    for (var i = 0; i < nums2.length; i++) {
        if (hashMap[nums2[i]]) {
            hashMap[nums2[i]] += 1;
        }
    }
    var result = [];
    for (var key in hashMap) {
        if (hashMap[key] >= 2) {
            result.push(key);
        }
    }
    return result;
};