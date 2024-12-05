/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
/* 
var evalRPN = function (tokens) {
  const stack = [];
  tokens.forEach((item) => {
    if (item === "+") {
      const two = stack.pop();
      const one = stack.pop();
      const calculation = parseInt(one) + parseInt(two);
      stack.push(calculation);
    } else if (item === "-") {
      const two = stack.pop();
      const one = stack.pop();
      const calculation = parseInt(one) - parseInt(two);
      stack.push(calculation);
    } else if (item === "*") {
      const two = stack.pop();
      const one = stack.pop();
      const calculation = parseInt(one) * parseInt(two);
      stack.push(calculation);
    } else if (item === "/") {
      const two = stack.pop();
      const one = stack.pop();
      const calculation = parseInt(parseInt(one) / parseInt(two));
      stack.push(calculation);
    } else {
      stack.push(item);
    }
  });
  return stack[0]
};
 */

function evalRPN(tokens) {
  const stack = [];
  tokens.forEach((token) => {
    if (/^[+\-*/]$/.test(token)) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push(calculate(x, y, token));
    } else {
      stack.push(+token);
    }
  });
  return stack.pop();
}

function calculate(x, y, operatorString) {
  switch (operatorString) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return (x / y) | 0;
  }
}
// @lc code=end
