### 199\. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the *right* side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,

       1            <---
     /   \
    2     3         <---
     \     \
      5     4       <---

You should return `[1, 3, 4]`.

### 题意
给定一个二叉树，想象自己站在*右侧，返回从顶部到底部可以看到的节点的值。

### 方法（一）
这里用BFS。没什么难度