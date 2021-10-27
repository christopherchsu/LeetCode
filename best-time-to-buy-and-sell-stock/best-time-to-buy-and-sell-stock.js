/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var curMin = prices[0];
    var min = curMin;
    var curMax = prices[0];
    var curProfit = curMax - curMin;

    
    
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i] - min > curProfit) {
            curMin = min;
            curMax = prices[i];
            curProfit = curMax - curMin;
        }
        if (prices[i] > curMax) {
            curMax = prices[i];
            curProfit = curMax - curMin;
        }
    }
    return curProfit;
};