### 226\. Invert Binary Tree

Invert a binary tree.

         4
       /   \
      2     7
     / \   / \
    1   3 6   9

to

         4
       /   \
      7     2
     / \   / \
    9   6 3   1

Trivia:
This problem was inspired by [this original tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl):

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

### 题意
反转一下二叉树。

### 方法（一）
首先看完题直接能写出A过的都应该骄傲一下。因为Homebrew的作者竟然没写出来。刚开始我是用BFS来写，比较复杂。

### 方法（二）
递归的方式