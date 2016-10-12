1. ### 20\. Valid Parentheses

  Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

  The brackets must close in the correct order, `"()"` and `"()[]{}"` are all valid but `"(]"` and `"([)]"` are not.
  
  ### 方法（一）
  遍历字符串，碰到左括号入栈，右括号出栈，出栈的元素得是当前右括号的对应左括号。否则返回false。当遍历完后发现栈中仍有元素，返回false