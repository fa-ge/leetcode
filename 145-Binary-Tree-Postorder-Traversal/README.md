### 145\. Binary Tree Postorder Traversal

Given a binary tree, return the *postorder* traversal of its nodes' values.

For example:
Given binary tree `{1,#,2,3}`,

       1
        \
         2
        /
       3

return `[3,2,1]`.

Note: Recursive solution is trivial, could you do it iteratively?

### 题意
后序遍历二叉树

### 方法（一）
先序遍历是第一次访问节点的时候把值输出，中序遍历是第二次访问把值输出，后序遍历是第三次访问才把值输出。所以先序是把节点放入栈中的时候把值输出，中序是从栈中弹出节点的时候把值输出，所以后续遍历可以给节点加个标记属性。