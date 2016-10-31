### 102\. Binary Tree Level Order Traversal

Given a binary tree, return the *level order* traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

        3
       / \
      9  20
        /  \
       15   7

return its level order traversal as:

    [
      [3],
      [9,20],
      [15,7]
    ]

### 题意
按层遍历二叉树并返回二维数组中的结构

### 方法（一）
首先想到的就是BFS啊。麻烦一点的就是要记录第几层。这里用了两个队列。queue1如果有9，20两个节点。那么循环出队queue1.把出队节点的左右子节点放到queue2中。也就是15，7