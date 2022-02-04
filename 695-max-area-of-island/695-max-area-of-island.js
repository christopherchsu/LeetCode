/**
 * @param {number[][]} grid
 * @return {number}
 */



var maxAreaOfIsland = function(grid) {
    var max = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                var area = 0;
                var countArea = function(row, col) {
                    if (row < 0 || col < 0 || row === grid.length || col === grid[0].length || grid[row][col] === 0) {
                        return;
                    }
                    area++;
                    grid[row][col] = 0;
                    return countArea(row - 1, col) || countArea(row, col - 1) || countArea(row + 1, col) || countArea(row, col + 1);

                }
                countArea(i, j);
                if (area > max) {
                    max = area;
                }
            }
        }
    }
    return max;
};