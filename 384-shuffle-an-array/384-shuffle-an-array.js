/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.default = nums.slice();
    this.shuffled = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.shuffled = this.default.slice();
    return this.shuffled;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (var i = 0; i < this.shuffled.length; i++) {
        var idx = Math.floor(Math.random()*this.shuffled.length);
        var temp = this.shuffled[i];
        this.shuffled[i] = this.shuffled[idx];
        this.shuffled[idx] = temp;
    }
    return this.shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */