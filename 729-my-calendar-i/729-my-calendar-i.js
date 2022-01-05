
var MyCalendar = function() {
    this.calendar = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (var i = 0; i < this.calendar.length; i++) {
        if ((this.calendar[i][0] <= start && start < this.calendar[i][1]) || (this.calendar[i][0] < end && end <= this.calendar[i][1])) {
            return false;
        }
        if ((start <= this.calendar[i][0] && this.calendar[i][0] < end) || (start < this.calendar[i][1]  && this.calendar[i][1]  <= end)) {
            return false;
        }
    }
    this.calendar.push([start, end])
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */