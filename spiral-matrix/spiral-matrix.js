/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
      var result = [];

  var recurse = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return
    } else {
      // top left to top right
      if (matrix.length === 1) {
        for (var i = 0; i< matrix[0].length; i++) {
          result.push(matrix[0][i])
        }
        return;
      }
      if (matrix[0].length === 1) {
        for (var i = 0; i < matrix.length; i++) {
          result.push(matrix[i][0])
        }
        return;
      }
      for (var i = 0; i < matrix[0].length; i++) {
        result.push(matrix[0][i]);
      }
      // top right to bottom right
      for (var i = 1; i < matrix.length; i++) {
        result.push(matrix[i][matrix[0].length - 1])
      }
      // bottom right to bottom left
      for (var i = matrix[0].length - 2; i >= 0; i--) {
        result.push(matrix[matrix.length - 1][i])
      }
      // bottom left to top left
      for (var i = matrix.length - 2; i > 0; i--) {
        result.push(matrix[i][0])
      }
      var newArr = [];
      for (var i = 1; i < matrix.length - 1; i++) {
        newArr.push(matrix[i].slice(1, matrix[0].length - 1));
      }
      recurse(newArr);
    }
  }
  recurse(matrix);
  return result;
};