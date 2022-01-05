/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.shuffled = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.shuffled;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var shuffled = this.shuffled.slice();
    for (var i = 0; i < shuffled.length; i++) {
        var idx = Math.floor(Math.random()*this.shuffled.length);
        var temp = shuffled[i];
        shuffled[i] = shuffled[idx];
        shuffled[idx] = temp;
    }
    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */