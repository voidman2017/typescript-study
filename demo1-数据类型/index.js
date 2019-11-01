"use strict";
/* 布尔类型 */
var isTrue = true;
var isFalse = false;
// isTrue = 123
console.log(isTrue);
/* 数字类型 */
var num1 = 111;
var num2 = 222;
/* 字符串类型(string) */
var str1 = 'hello';
var str2 = 'world';
/* 数组类型（array） */
/* 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组    */
var arr1 = [1, 2, 3, 4];
/*  第二种方式是使用数组泛型，Array<元素类型> */
var arr2 = ['1', '2', '3', '4'];
/* 元组类型（tuple） */
var tuple1 = ['string', 1, true];
var tuple2;
tuple2 = [1, 2, '3'];
/* let tuple3: [number, number, string]
tuple3[0] = 1;
tuple3[1] = 2;
tuple3[2] = '3'; */
/* 枚举类型（enum） */
var Color;
(function (Color) {
    Color["red"] = "#fb0808";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
var c1 = Color.red;
var c2 = Color.blue;
var c3 = Color.green;
console.log(c1, c2, c3);
/* 任意类型（any） */
var box = document.getElementById('box');
box.style.color = 'red';
/* null 和 undefined */
/*

```typescript
```

compileToJS：

```javascript
```

*/
