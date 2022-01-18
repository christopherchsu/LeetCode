/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var hashMap = {};
    var min = Infinity;
    var temp = [];
    var result = [];
    for (var i = 0; i < list1.length; i++) {
        hashMap[list1[i]] = i;
    }
    for (var i = 0; i < list2.length; i++) {
        if (hashMap[list2[i]] !== undefined) {
            temp.push([list2[i], i + hashMap[list2[i]]])
            if (i + hashMap[list2[i]] < min) {
                min = i + hashMap[list2[i]];
            }
        }
    }
    for (var i = 0; i < temp.length; i++) {
        if (temp[i][1] === min) {
            result.push(temp[i][0]);
        }
    }
    return result;
};