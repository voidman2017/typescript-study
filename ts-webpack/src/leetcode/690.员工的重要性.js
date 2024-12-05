/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
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
 var GetImportance = function (employees, id) {
    let res = 0;
    getNext(employees, id)
    function getNext(employees = [], id) {
        const current = employees.find(item => item.id === id)
        if (!current) return
        const {id:currentId, importance, subordinates = []} = current
        res += importance
        subordinates.forEach(item => {
            getNext(employees, item)
        })
    }
    return res;
};
// @lc code=end

