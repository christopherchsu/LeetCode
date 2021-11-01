/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var result = [];
  for (var i = 0; i <= n; i++) {
    if (i === 0) {
      result.push(i);
    } else if (i === 1) {
      result.push(i);
    } else {
      result.push(result[i-1] + result[i-2]);
    }
  }
  return (result[result.length-1])
};