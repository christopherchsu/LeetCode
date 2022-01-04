/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    var result = [asteroids[0]];
    for (var i = 1; i < asteroids.length; i++) {
        if (result.length === 0) {
            result.push(asteroids[i]);
            continue;
        } else {
            var temp = result.pop();
        }
        if ((temp < 0 && asteroids[i] < 0) || (temp > 0 && asteroids[i] > 0 )|| (temp < 0 && asteroids[i] > 0)) {
            result.push(temp);
            result.push(asteroids[i]);
            continue;
        }
        if (temp === Math.abs(asteroids[i])) {
            continue;
        } else if (temp > Math.abs(asteroids[i])) {
            result.push(temp);
        } else if (temp < Math.abs(asteroids[i])) {
            while (result.length !== 0) {
                temp = result.pop();
                if ((temp < 0 && asteroids[i] < 0) || (temp > 0 && asteroids[i] > 0 )|| (temp < 0 && asteroids[i] > 0)) {
                    result.push(temp);
                    result.push(asteroids[i]);
                    break;
                }
                if (temp === Math.abs(asteroids[i])) {
                    break;
                } else if (temp > Math.abs(asteroids[i])) {
                    result.push(temp);
                    break;
                }
            }
            if (result.length === 0 && temp < Math.abs(asteroids[i])) {
                result.push(asteroids[i]);
            }
        }
    }
    return result;
};