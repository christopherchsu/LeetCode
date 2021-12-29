/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var nums = nums1.slice();
    var idx1 = 0;
    var idx2 = 0;
    var idx = 0;
    while (idx1 < m && idx2 < n) {
        if (nums[idx1] <= nums2[idx2]) {
            nums1[idx] = nums[idx1];
            idx1++;
        } else {
            nums1[idx] = nums2[idx2];
            idx2++;
        }
        idx++;
    }
    if (idx1 === m) {
        for (var i = idx; i < nums1.length; i++) {
            nums1[i] = nums2[idx2];
            idx2++;
        }
    } else {
        for (var i = idx; i < nums1.length; i++) {
            nums1[i] = nums[idx1];
            idx1++;
        }
    }
    
};