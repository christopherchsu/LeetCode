/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => {
        return b[1] - a[1];
    })
    let result = 0;
    for (var i = 0; i < boxTypes.length; i++) {
        if (truckSize >= boxTypes[i][0]) {
            result += boxTypes[i][0] * boxTypes[i][1];
            truckSize -= boxTypes[i][0];
        } else {
            boxTypes[i][0] -= truckSize;
            result += truckSize * boxTypes[i][1];
            truckSize -= truckSize;
            break;
        }
    }
    return result;
};