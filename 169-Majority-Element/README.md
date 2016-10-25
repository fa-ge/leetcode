### 169\. Majority Element


Given an array of size *n*, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

### 题意
找到n大小的数组中出现超过`⌊ n/2 ⌋`次的元素

### 方法（一）
把所有的元素都存到hashmap中，key为元素，value为元素出现的次数

### 方法（二）
因为元素出现的次数超过`⌊ n/2 ⌋`次。所以可以用抵消元素的方法来做。就是一开始假设第一个为的主元素，此时count为1。如果出现和它相同的元素，那么count加1.不同就减去1.当count为0的时候设置当前元素为主元素。