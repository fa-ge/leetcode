### 94\. Binary Tree Inorder Traversal

Given a binary tree, return the *inorder* traversal of its nodes' values.

For example:
Given binary tree `[1,null,2,3]`,

       1
        \
         2
        /
       3

return `[1,3,2]`.

Note: Recursive solution is trivial, could you do it iteratively?

### 题意
就是给你一个二叉树，让你以中序遍历的方式输出一个数组。提示中是不想你用递归来做

### 方法（一）
中序遍历非递归的话我用栈来写。