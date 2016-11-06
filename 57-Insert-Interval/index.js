/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    for (let i = intervals.length - 1; i >= 0; i--) {
        if (!(intervals[i].start > newInterval.end || newInterval.start > intervals[i].end)) {
            newInterval.start = Math.min(newInterval.start, intervals[i].start)
            newInterval.end = Math.max(newInterval.end, intervals[i].end)
            intervals.splice(i, 1)
        }
    }
    intervals.push(new Interval(Infinity, Infinity))
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval.start < intervals[i].start) {
            intervals.splice(i, 0, newInterval)
            break
        }
    }
    intervals.pop()
    return intervals
};

function Interval(start, end) {
    this.start = start;
    this.end = end;
}
new Interval(1,3)
// const intervals = [new Interval(1,2), new Interval(3,5), new Interval(6,7), new Interval(8,10), new Interval(12,16)]
const intervals = [new Interval(1,5)]
const newInterval = new Interval(6,8)
console.log(insert(intervals, newInterval))