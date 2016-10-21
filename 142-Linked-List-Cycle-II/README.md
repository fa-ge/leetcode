### 142\. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?

### 题意
找闭合环路的起点  

### 方法（一）
假设A的速度是1，B的速度是2，这个环的长度是n，环之前的长度是k，假设走了x次后能相遇，相遇的时候A绕了e圈，B绕了f圈，其实n肯定是0,A,B第一次相遇与p，可以得出
x = k+en+p  
2x= k+fn+p  
可以得出(f-e)n=k+p  
那么也就是说当他们第一次相遇在p点后，再走k的距离，就能回到闭合环路的起点来。怎么求k呢？当他们第一次相遇后把A或B的指针指向head初始的位置，然后第一次都以1的速度前进，第一次相遇就是环路的起点。

