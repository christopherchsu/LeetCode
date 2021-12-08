/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    var minutesAngle = minutes*6;
    var hourAngle = (hour*30) + (minutes/60 *30);
    if (hourAngle >= 360) {
        hourAngle -= 360;
    }
    return Math.min(Math.abs(minutesAngle - hourAngle), 360-Math.abs(hourAngle-minutesAngle));
};