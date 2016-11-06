/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a.start > b.start) {
            return -1
        } else if (a.start < b.start) {
            return 1
        }
        return 0
    })
    for (let i = intervals.length - 1; i > 0; i--) {
        if (!(intervals[i].start > intervals[i - 1].end || intervals[i - 1].start > intervals[i].end)) {
            intervals[i - 1].start = Math.min(intervals[i - 1].start, intervals[i].start)
            intervals[i - 1].end = Math.max(intervals[i - 1].end, intervals[i].end)
            intervals.splice(i, 1)
        }
    }
    return intervals.reverse()
};


function Interval(start, end) {
    this.start = start;
    this.end = end;
}

let intervals = [new Interval(2,3), new Interval(0,1), new Interval(5,7), new Interval(4,6), new Interval(5,5), new Interval(4,6), new Interval(5,6), new Interval(1,3), new Interval(4,4), new Interval(0,0), new Interval(3,5), new Interval(2,2)]
console.log(merge(intervals))