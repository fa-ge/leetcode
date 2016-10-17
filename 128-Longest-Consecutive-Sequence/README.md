### 128\. Longest Consecutive Sequence


Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given `[100, 4, 200, 1, 3, 2]`,
The longest consecutive elements sequence is `[1, 2, 3, 4]`. Return its length: `4`.

Your algorithm should run in O(*n*) complexity.

### 方法（一）
这题要求复杂度是O(*n*),所以先排序是不对的。这里将数组的元素都放到hash中，然后再迭代数组，如果在hash中存在num+1或者num-1这个key，那么继续找，找到就从数组中删除这个元素。每次中断后记录最长的长度。