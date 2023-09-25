/**
 * sort params numerically
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const numericalSort = (a, b) => a.sort((a, b) => a - b)

module.exports = { numericalSort }
