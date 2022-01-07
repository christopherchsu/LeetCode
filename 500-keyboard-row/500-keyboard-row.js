/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var firstRow = 'qwertyuiop';
    var secondRow = 'asdfghjkl';
    var thirdRow = 'zxcvbnm';
    var firstMap = {};
    var secondMap = {};
    var thirdMap = {};
    for (var i = 0; i < firstRow.length; i++) {
        firstMap[firstRow[i]] = 1;
    }
    for (var i = 0; i < secondRow.length; i++) {
        secondMap[secondRow[i]] = 1;
    }
    for (var i = 0; i < thirdRow.length; i++) {
        thirdMap[thirdRow[i]] = 1;
    }
    var results = [];
    for (var i = 0; i < words.length; i++) {
        var isFirst = true;
        var isSecond = true;
        var isThird = true;
        for (var j = 0; j < words[i].length; j++) {
            var curLetter = words[i][j].toLowerCase();
            if (firstMap[curLetter] === undefined) {
                isFirst = false;
            }
            if (secondMap[curLetter] === undefined) {
                isSecond = false;
            }
            if (thirdMap[curLetter] === undefined) {
                isThird = false;
            }
            if (!isFirst && !isSecond && !isThird) {
                break;
            }
        }
        if (isFirst || isSecond || isThird) {
            results.push(words[i]);
        }
    }
    return results;
};