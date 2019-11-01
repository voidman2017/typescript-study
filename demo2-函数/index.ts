/* 函数声明 */
/* 和 es5 一样可以创建有名函数和匿名函数。也就是函数表达式和函数声明 。但是可以给函数添加返回值类型*/
function fn1(): void {
    console.log(123)
}
const fn2 = function (): number {
    return 123;
}