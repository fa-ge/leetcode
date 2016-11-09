/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a.end > b.end) {
            return 1
        } else if(a.end < b.end) {
            return -1
        }

        return 0
    })

    let res = 0
    for (let i = 1, j = 0; i < intervals.length; i++) {
        if (intervals[i].start < intervals[j].end) {
            res++
        } else {
            j = i
        }
    }
    return res
};

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

console.log(eraseOverlapIntervals( [new Interval(1,2),new Interval(1,2),new Interval(1,2)]))