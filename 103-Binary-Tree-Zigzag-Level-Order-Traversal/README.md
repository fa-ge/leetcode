### 103\. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the *zigzag level order* traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

        3
       / \
      9  20
        /  \
       15   7

return its zigzag level order traversal as:

    [
      [3],
      [20,9],
      [15,7]
    ]

### 方法（一）
这道题投机取巧了一把，把102道题加了一个判断如果第n层是奇数就反转该数组

