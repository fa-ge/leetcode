/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0
    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i]
    }
    if (sum < 0) {
        return -1
    }
    sum = 0
    let res = 0
    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i]
        if (sum < 0) {
            res = i + 1
            sum = 0
        }
    }
    return res
};

console.log(canCompleteCircuit([3,4,5], [3,4,5]))