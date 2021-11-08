/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rows = board.length;
    var cols = board[0].length;
    var path = {};
    
    var recurse = function(r, c, i) {
        if (i === word.length) {
            return true;
        }
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i] || path[[r, c]]) {
            return false;
        }
            path[[r, c]] = 1;
    var res = (recurse(r + 1, c, i + 1) || recurse(r - 1, c, i + 1) || recurse(r, c + 1, i + 1) || recurse(r, c - 1, i + 1));
    delete path[[r,c]];
    return res
    }
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (recurse(r, c, 0)) {
                return true;   
            }
        }
    }
    return false;
};
