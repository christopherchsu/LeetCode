/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var set = {};
    var left = 0;
    var right = height.length - 1;
    var curMax = 0;
    while (left < right) {
        if ((right-left)* Math.min(height[left], height[right]) > curMax) {
            curMax = (right-left)* Math.min(height[left], height[right]);
        }
        if (height[right] < height[left]) {
            right--;
        } else {
            left++;
        }
    }
    return curMax;
};