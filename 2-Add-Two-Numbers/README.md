### 2\. Add Two Numbers

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -\> 4 -\> 3) + (5 -\> 6 -\> 4)
Output: 7 -\> 0 -\> 8

### 方法（一）
题目意思就是两个链表代表了两个整数做加法，第一个是最低位个位，第二个是十位。。。依次，和正常的数字刚好相反，因为正常数字第一个数是最高位。再注意一下进制就可以了
3 4 5
3 1 4

res = new node(6)
head = res
tail = res

res = new node(5)
tail.next = res
tail = res


res = new node(9)
tail.next = res
tail = res

