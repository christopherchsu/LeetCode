/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr = x.toString().split('');
    if (arr[0] === '-'){
        var result = arr.slice(1).reverse().join('');
        result = '-' + result;
        var parsed = parseInt(result); 
        if (-(2**31) <= parsed){
            return parseInt(result);
        }
        return 0;
    }
    var parsed = parseInt(arr.reverse().join(''));
    if (parsed <= 2**31 -1){
         return parsed;   
    }
    return 0
};