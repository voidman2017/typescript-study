/* 布尔类型 */
let isTrue: boolean = true;
let isFalse: boolean = false;
// isTrue = 123
console.log(isTrue)


/* 数字类型 */
let num1: number = 111;
let num2: number = 222;

/* 字符串类型(string) */
let str1: string = 'hello';
let str2: string = 'world';

/* 数组类型（array） */
/* 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组    */
let arr1: number[] = [1, 2, 3, 4];
/*  第二种方式是使用数组泛型，Array<元素类型> */
let arr2: Array<string> = ['1', '2', '3', '4']


/* 元组类型（tuple） */
let tuple1: [string, number, boolean] = ['string', 1, true];
let tuple2: [number, number, string];
tuple2 = [1, 2, '3'];

/* let tuple3: [number, number, string]
tuple3[0] = 1;
tuple3[1] = 2;
tuple3[2] = '3'; */

/* 枚举类型（enum） */
enum Color { red = "#fb0808", blue = 2, green = 3 }

let c1: Color = Color.red;
let c2: Color = Color.blue;
let c3: Color = Color.green;
console.log(c1, c2, c3)


/* 任意类型（any） */
const box: any = document.getElementById('box');
box.style.color = 'red';


/* null 和 undefined */


/*

```typescript
```

compileToJS：

```javascript
```

*/
