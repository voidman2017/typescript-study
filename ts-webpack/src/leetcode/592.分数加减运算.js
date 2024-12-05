/*
 * @lc app=leetcode.cn id=592 lang=javascript
 *
 * [592] 分数加减运算
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const fractions = expression.split(/[+-]/).filter(Boolean); //获取每一项 
  const operator = expression.split(/[0-9/]/).filter(Boolean); //获取操作符
  expression[0] !== "-" && operator.unshift("+"); //补充第一位操作符

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); //最大公约数
  const lcm = fractions.reduce((result, fraction) => {
    const denominator = fraction.split("/")[1];
    return (result * denominator) / gcd(result, denominator);
  }, 1); //分母最小公倍数


  const molecularSum = fractions.reduce((total, fraction, index) => {
    const [molecular, denominator] = fraction.split("/");
    const multiple = (lcm / denominator) * (operator[index] === "+" ? 1 : -1);
    return total + molecular * multiple;
  }, 0);

  const resultGcd = gcd(Math.abs(molecularSum), lcm);
  return `${molecularSum / resultGcd}/${lcm / resultGcd}`;
};
// @lc code=end
fractionAddition('1/3-1/2')