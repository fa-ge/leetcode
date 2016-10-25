### 229\. Majority Element II

Given an integer array of size *n*, find all elements that appear more than `⌊ n/3 ⌋` times. The algorithm should run in linear time and in O(1) space.

Hint:

1. How many majority elements could it possibly have?
2. Do you have a better hint? [Suggest it](mailto:admin@leetcode.com?subject=Hints%20for%20Majority%20Element%20II)!

### 题意
从一个长度为n的数组中找到超过`⌊ n/3 ⌋`次的元素，可能没有。要求时间复杂度是O(n),空间复杂度是O(1);照理来说空间复杂度是常量的话，那么hash表的解决方法应该是不能用了。但是看到discuss中有人用hash表解决也是挺奇怪的。

### 方法（一）
因为元素出现的次数要超过`⌊ n/3 ⌋`次，所以这样的元素最多两个。原理和169中的方法（二）一样。只不过这里要设置两个候选主元素，两个count。