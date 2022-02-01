/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    var row = 0;
    var col = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (i === 0 && j === 0) {
                continue;
            } else if (i === 0) {
                grid[i][j] += grid[i][j-1];
            } else if (j === 0) {
                grid[i][j] += grid[i-1][j];
            } else {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[rows-1][cols-1];
};