### 135\. Candy

There are *N* children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

* Each child must have at least one candy.
* Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?

### 题意
有N个孩子站在一排。 每个孩子被分配一个评分值。

你给这些孩子糖果满足以下要求：

每个孩子必须有至少一个糖果。
评分较高的孩子比他们的邻居获得更多的糖果。
你必须给的最少糖果是多少？

### 方法（一）
有两种情况，一种是递增到最大值，一种是递减到最小值。还有以下几个特性
* 在递增的时候，后一个数一定比前一个数大1，最高点列外。
* 极小值一定是1（比左边右边都要小的值）   
由以上两个特性可以推出下面的解法   
先从左往右遍历，确保每个孩子根他左边的孩子相比，如果分高，则糖要多1个，如果分比左边低，就只给一颗。然后我们再从右往左遍历，确保每个孩子跟他右边的孩子相比，如果分高则糖至少多1个（这里至少多1个的意思是，我们要取当前孩子手里糖的数量，和其右边孩子糖的数量加1，两者的较大值）。


