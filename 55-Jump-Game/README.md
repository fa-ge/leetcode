### 55\. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = `[2,3,1,1,4]`, return `true`.

A = `[3,2,1,0,4]`, return `false`.

### 题意
给定一个非负整数数组，你最初被定位在数组的第一个索引。

数组中的每个元素表示在该位置的最大跳跃长度。

确定是否能够达到最后一个索引。

例如：

A = `[2,3,1,1,4]`，return `true`。

A = `[3,2,1,0,4]`，return `false`。

### 方法（一）
贪心题目。每次跳的时候都应该选择最优的。最优就是你在这点起跳能跳最远的。方法一就是很普通的解法
### 方法（二）
讨论里看到的，倒着遍历，但跳的方向不变，记录能跳的最近距离，如果最近距离为0，那说明所有的位置都能到。