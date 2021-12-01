/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    var setVisited = function(row, col) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][col] !== 0) {
                matrix[i][col] = 'visited'
            }
        }
        for (var i = 0; i < matrix[0].length; i++) {
            if (matrix[row][i] !== 0) {
                matrix[row][i] = 'visited'
            }
        }
    }
    
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                setVisited(row, col);
            }
        }
    }
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 'visited') {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
};