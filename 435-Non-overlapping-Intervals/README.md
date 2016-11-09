### 435\. Non-overlapping Intervals

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note:

1. You may assume the interval's end point is always bigger than its start point.
2. Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

### 题意
给定间隔集合，找到需要删除的间隔的最小数量，以使其余间隔不重叠。

注意：
您可以假定间隔的终点总是大于其起点。
像[1,2]和[2,3]之类的边界具有“接触”边界，但它们彼此不重叠。
实施例1：
输入：[[1,2]，[2,3]，[3,4]，[1,3]

输出：1

说明：[1,3]可以删除，其余的间隔是不重叠的。
实施例2：
输入：[[1,2]，[1,2]，[1,2]]

输出：2

说明：您需要删除两个[1,2]，使其余的时间间隔不重叠。
实施例3：
输入：[[1,2]，[2,3]]

输出：0

说明：您不需要删除任何间隔，因为它们已经不重叠。

### 方法（一）
按照end从小到大排序，从第二个元素开始遍历排序后的数组。再定义一个指针a指向第一个元素。如果两个元素重合结果加一，如果不重合a指向当前元素。。
不知道为什么好慢，discuss中也没有js solution。我的思想应该是没错的。有人知道为什么我的代码这么慢请告诉我一下。