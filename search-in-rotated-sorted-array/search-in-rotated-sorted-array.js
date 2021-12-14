/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(rotated, target) {
var pivot = findPivot(rotated);
  if (pivot === -1) {
    var idx = binarySearch(rotated, target);
    if (idx === -1) {
      return -1;
    }
    return idx;
  } else {
    var arr1 = rotated.slice(0, pivot + 1);
    var arr2 = rotated.slice(pivot + 1);
    var idx1 = binarySearch(arr1, target);
    var idx2 = binarySearch(arr2, target);
    if (idx1 === -1 && idx2 === -1) {
      return -1
    } else if (idx1 === -1) {
      return pivot + 1 + idx2;
    } else {
      return idx1;
    }
  }
};


var findPivot = function(array) {
  var min = 0;
  var max = array.length - 1;
  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    if (array[mid] > array[mid + 1]) {
      return mid
    }
    if (array[mid] < array[mid - 1]) {
      return mid - 1;
    }
    if (array[min] < array[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}


var binarySearch = function(array, target) {
  var min = 0;
  var max = array.length - 1;
  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    if (array[mid] < target) {
      min = mid + 1;
    } else if (target < array[mid]) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}