### 57\. Insert Interval

Given a set of *non-overlapping* intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals `[1,3],[6,9]`, insert and merge `[2,5]` in as `[1,5],[6,9]`.

Example 2:
Given `[1,2],[3,5],[6,7],[8,10],[12,16]`, insert and merge `[4,9]` in as `[1,2],[3,10],[12,16]`.

This is because the new interval `[4,9]` overlaps with `[3,5],[6,7],[8,10]`.

### 方法（一）
两个集合[a1,b1],[a2,b2]有重合的情况比较多，所以看两个集合无重合的情况有两种:
1.  a2>b1
2.  a1>b2
在遍历intervals的时候判断两个集合是否有重合，如果有，那就从intervals中删除这个集合，并把newinterval这个集合合[Math.min(a1,a2), Math.max(b1,b2)].
最后再遍历intervals一次把newinterval插入到适当位置即可