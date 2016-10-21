### 141\. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

### 题意
判断一个链表是否有一个闭合环路。

### 方法（一）
声明两个指针，一个指针的速度是1，一个指针的速度是2，如果是闭合的那么第二个指针一定会在一段时间后和第一个重合。如果不是闭合的，那么第二个一定先到达终点
其实大家不显麻烦还能证明一下为什么有一个闭合环路就一定能相遇。
  假设假设A的速度是1，B的速度是2，这个环有n步的长度，那么多少次后A和B相遇
设x次后相遇，也就是有2x%n = x%n => 2x%n - x%n = 0
根据模运算的规则有 (a % p - b % p) % p = (a - b) % p
也就是有 (2x-x)%n=0%n=0 => x%n = 0 所以只要x是n的倍数就一定可以遇到。