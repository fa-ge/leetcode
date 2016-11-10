/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] > b[0]) {
            return -1
        } else if (a[0] < b[0]) {
            return 1
        }
        if (a[1] > b[1]) {
            return 1
        } else if (a[1] < b[1]) {
            return -1
        }
        return 0
    })

    const res = []
    people.forEach(value => {
        res.splice(value[1], 0, value)
    })

    return res
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))