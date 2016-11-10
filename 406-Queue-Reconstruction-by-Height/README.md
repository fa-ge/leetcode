### 406\. Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers `(h, k)`, where `h` is the height of the person and `k` is the number of people in front of this person who have a height greater than or equal to `h`. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

Example

    Input:
    [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

    Output:
    [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

### 题意
假设你有一个随机列表的人站在队列中。 每个人都用一对整数（h，k）来描述，其中`h`是人的身高，`k`是这个人前面的身高大于或等于的人数 `h`。 编写一个算法来重建队列。

注意：
人数不足1100人。

### 方法（一）
首先我们给队列先排个序，按照身高高的排前面，如果身高相同，则第二个数小的排前面。然后我们新建一个空的数组，遍历之前排好序的数组，然后根据每个元素的第二个数字，将其插入到res数组中对应的位置