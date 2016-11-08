### 179\. Largest Number

Given a list of non negative integers, arrange them such that they form the largest number.

For example, given `[3, 30, 34, 5, 9]`, the largest formed number is `9534330`.

Note: The result may be very large, so you need to return a string instead of an integer.

### 方法（一）
其实就是一个排序，只不过这个排序不是简单的按照数字的大小来排序。在这里9>5>34>3>30.如果产生这样的排序。这里有个方法是如果a>b，那么ab一定大于ba。