/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  const res = [];
  for (let i = 0; i < s.length; i++) {
    //如果入栈前栈为空，说明即将入栈的'('是最外层括号
    if(s[i] === '(' && stack.length === 0) {
      stack.push('(');
      //如果入栈前栈不为空，说明即将入栈的'('是内层括号，push进res中
    }else if(s[i] === '(' && stack.length !== 0) {
      res.push('(');
      stack.push('(');
    }

    //遇到右括号，栈就弹出。如果弹出后栈不为空，说明是内层括号，push进res中
    if (s[i] === ')') {
      stack.pop();
      if(stack.length !== 0 ) {
        res.push(')');
      }
    }
  }
  return res.join('');
};

// 测试用例
let test = "(()())(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');