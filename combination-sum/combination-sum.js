/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var recurse = function(idx, sum, combination) {
        if (sum >= target || idx >= candidates.length) {
            if (sum === target) {
                result.push(combination.slice());            
            }
            return;
        } else {
            combination.push(candidates[idx]);
            recurse(idx, sum + candidates[idx], combination);
            combination.pop();
            recurse(idx+1, sum, combination);
        }
    }
    recurse(0, 0, []);
    return result;
};