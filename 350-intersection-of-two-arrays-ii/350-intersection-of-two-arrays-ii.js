/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var hashMap1 = {};
    var hashMap2 = {};
    for (var i = 0; i < nums1.length; i++) {
        if (hashMap1[nums1[i]] === undefined) {
            hashMap1[nums1[i]] = 1;
        } else {
            hashMap1[nums1[i]]++;
        }
    }
    for (var i = 0; i < nums2.length; i++) {
        if (hashMap2[nums2[i]] === undefined) {
            hashMap2[nums2[i]] = 1;
        } else {
            hashMap2[nums2[i]]++;
        }
    }
    var result = [];
    for (var key in hashMap1) {
        if (hashMap2[key]) {
            var min = Math.min(hashMap1[key], hashMap2[key]);
            while (min > 0) {
                result.push(key);
                min--;
            }
        }
    }
    return result;
};