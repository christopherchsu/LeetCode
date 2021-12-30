
var RandomizedSet = function() {
    this.storage = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.storage[val] === undefined) {
        this.storage[val] = val;
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.storage[val] !== undefined) {
        delete this.storage[val];
        return true
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var keys = Object.keys(this.storage);
    var idx = Math.floor(Math.random()*(keys.length))
    return keys[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */