/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var i = 0; i < board.length; i++) {
        var rowHashMap = {};
        var colHashMap = {};
        for (var j = 0; j < board[i].length; j++) {
            if (parseInt(board[i][j]) <= 9 && 1 <= parseInt(board[i][j])) {
                if (rowHashMap[board[i][j]] === undefined) {
                    rowHashMap[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
            if (parseInt(board[j][i]) <= 9 && 1 <= parseInt(board[j][i])) {
                if (colHashMap[board[j][i]] === undefined) {
                    colHashMap[board[j][i]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    var rowMin = 0;
    var colMin = 0;
    var rowMax = 3;
    var colMax = 3;
    while (colMax <= 9) {
        var gridHashMap = {};
        for (var i = rowMin; i < rowMax; i++) {
            for (var j = colMin; j < colMax; j++) {
                if (parseInt(board[i][j]) <= 9 && 1 <= parseInt(board[i][j])) {
                    if (gridHashMap[board[i][j]] === undefined) {
                        gridHashMap[board[i][j]] = 1;
                    } else {
                        return false;
                    }
                }
            }
        }
        rowMin += 3;
        rowMax += 3;
        if (rowMax > 9) {
            rowMin = 0;
            rowMax = 3;
            colMin += 3;
            colMax += 3;
        }
    }
    return true;
};