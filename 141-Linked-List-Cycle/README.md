### 141\. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

### 题意
判断一个链表是否有一个闭合环路。

### 方法（一）
声明两个指针，一个指针的速度是1，一个指针的速度是2，如果是闭合的那么第二个指针一定会在一段时间后和第一个重合。如果不是闭合的，那么第二个一定先到达终点
其实大家不显麻烦还能证明一下为什么有一个闭合环路就一定能相遇。
![1](https://github.com/fa-ge/leetcodeAlgorithms/blob/master/141-Linked-List-Cycle/1.png)
假设假设A的速度是1，B的速度是2，这个环的长度是n，环之前的长度是k，假设走了x次后能相遇  
图一中，A，B同时从同一个点出发，那么当第一次相遇的时候B一定比A多走n的距离。因为B要超上A一圈才能相遇吧，所以肯定多走了一圈。  
图二中，A，B同时从不同位置出发，那么B一定比A要走B离A的距离  
图三中，A，B同时从同一个点出发，但这个点不在圆上，也就是说当A到达O点的位置的时候，B已经多走了K的距离。此时A和B相差就是n-k%n；此时B要比A多走这点距离才能第一次赶上A。当B赶上A的时候，A总共走了，当赶上的时候A其实总共走了k+n-k%n=x。因为k，n都是已知的数，所以x一定能得出来