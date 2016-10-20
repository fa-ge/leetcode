### 228\. Summary Ranges

Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given `[0,1,2,4,5,7]`, return `["0->2","4->5","7"].`

### 题意
给你一个没有重复元素的，已经排序好的整型数组，返回它的简要写法

### 方法（一）
遍历数组，用begin记录每次起始的位置，当nums[end]-nums[end-1]!=1的时候保存此时的时候，也就出现begin->end-1
这里又一个小技巧，就是为数组push一个Infinity的值，这样就不用对数组末做特殊判断