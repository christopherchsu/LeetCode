/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    var result = 0;
    var hashMap = {};
    for (var i = 0; i < employees.length; i++) {
        hashMap[employees[i].id] = employees[i];
    } 
    var recurse = function(employee) {
        if (employee === null) {
            return;
        } else {
            result += employee.importance
            if (employee.subordinates) {
                for (var i = 0; i < employee.subordinates.length; i++) {
                    recurse(hashMap[employee.subordinates[i]]);
                }   
            }
        }
    }
    recurse(hashMap[id]);
    return result;
};