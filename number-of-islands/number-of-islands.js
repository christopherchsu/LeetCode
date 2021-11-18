/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var rowLength = grid.length;
    var colLength = grid[0].length;
    
    var markVisited = function(row, col) {
        if (row < 0 || col < 0 || row >= rowLength || col >= colLength || grid[row][col] === '0') {
            return;
        }
        grid[row][col] = '0';
        markVisited(row + 1, col);
        markVisited(row - 1, col);
        markVisited(row, col + 1);
        markVisited(row, col - 1);
    }
    
    var count = 0;
    for (var i = 0; i < rowLength; i++) {
        for (var j = 0; j < colLength; j++) {
            if (grid[i][j] === '1') {
                count += 1;
                markVisited(i, j)
            }
        }
    }
    return count;
};
