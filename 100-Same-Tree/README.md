### 100\. Same Tree

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

### 题意
判断两棵树是否相等。这里的相等指的是结构相等并且各个节点的值相等

### 方法（一）
先序遍历两颗树，两颗树的节点不相同的情况有：一个为空，一个不为空或者两个节点的值不想等。当两个节点都为空时这两个节点自然相同了。但是当两个节点的值相同就比较他们的左子树和右子树