/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var left = 0;
    var right = 1;
    while (left < temperatures.length) {
        if (right === temperatures.length) {
            temperatures[left] = 0;
            left++;
            right = left + 1;
            continue;
        }
        if (temperatures[right] - temperatures[left] > 0) {
            temperatures[left] = right-left;
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return temperatures;
};