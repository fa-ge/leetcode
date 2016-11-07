### 164\. Maximum Gap

Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.

### 题意
求一个未排序数组中排序后两个相邻元素的最大间隔

### 方法（一）
要求在时间复杂度是线性的，所以基于比较的排序肯定是不可取的。下面列出官方答案：
假设有N个元素（有N-1个间隙），它们的范围从A到B.

那么最大间隙将不小于ceiling [（B-A）/（N-1）]

令桶的长度为len = ceiling [（B-A）/（N-1）]，那么我们将最多具有num =（B-A）/ len + 1个桶，我反倒是觉得应该是（B-A+1）/ len更好理解。
对于数组中的任何数K，我们可以通过计算loc =（K-A）/ len容易地找出它属于哪个桶，并且因此保持每个桶中的最大和最小元素。
由于相同桶中的元素之间的最大差异将最多为len-1，因此最终答案不会取自相同桶中的两个元素。

对于每个非空桶p，找到下一个非空桶q，然后q.min - p.max可能是问题的潜在答案。 返回所有这些值的最大值。