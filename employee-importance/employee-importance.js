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
    var recurse = function(employee) {
        console.log(employee);
        if (employee === null) {
            return;
        } else {
            result += employee.importance
            if (employee.subordinates) {
                for (var i = 0; i < employee.subordinates.length; i++) {
                    for (var j = 0; j < employees.length; j++) {
                        if (employees[j].id === employee.subordinates[i]) {
                            recurse(employees[j]);
                        }
                    }
                }   
            }
        }
    }
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            recurse(employees[i]);
        }
    }
    return result;
};