# 环境配置
- 全局安装 typescript
```shell
npm i typescript --g
```
- 在当前目录下执行 `tsc --init`，生成 tsconfig.json。 修改 "outDir"。
- 在vscode中可以点击 终端 -> 运行任务。或者在终端命令行中输入 `tsc -w`。

# 数据类型
- 布尔类型（boolean）
- 数字类型（number）
- 字符串类型(string)
- 数组类型（array）
- 元组类型（tuple）
- 枚举类型（enum）
- 任意类型（any）
- null 和 undefined
- void类型
- never类型

## 布尔类型（boolean）
```typescript
let isTrue: boolean = true;
let isFalse: boolean = false;
console.log(isTrue,isFalse);
```
compileToJS：
```javascript
var isTrue = true;
var isFalse = false;
console.log(isTrue,isFalse);
```
如果是：
```typescript
let isTrue: boolean = true;
let isFalse: boolean = false;
isTrue = 123;
console.log(isTrue,isFalse);
```
这里编译成js的时候会有错误提示：
```shell
index.ts:4:1 - error TS2322: Type '123' is not assignable to type 'boolean'.

4 isTrue = 123
  ~~~~~~

[14:36:56] Found 1 error. Watching for file changes.
```
表明类型不正确。但是可以发现最终还是会编译成js正常运行。    
compileToJS：
```javascript
"use strict";
var isTrue = true;
var isFalse = false;
isTrue = 123;
console.log(isTrue,isFalse);
```

## 数字类型（number）

```typescript
let num1: number = 111;
let num2: number = 222;
```

compileToJS：

```javascript
var num1 = 111;
var num2 = 222;
```

## 字符串类型(string)
```typescript
let str1: string = 'hello';
let str2: string = 'world';
```

compileToJS：

```javascript
var str1 = 'hello';
var str2 = 'world';
```

## 数组类型（array）
第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
```typescript
let arr1: number[] = [1, 2, 3, 4];
```

compileToJS：

```javascript
var arr1 = [1, 2, 3, 4];
``` 

第二种方式是使用数组泛型，Array<元素类型>
```typescript
let arr2: Array<string> = ['1', '2', '3', '4']
```

compileToJS：

```javascript
var arr2 = ['1', '2', '3', '4'];
```

## 元组类型（tuple）
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```typescript
let tuple1: [string, number, boolean] = ['string', 1, true];
let tuple2: [number, number, string];
tuple2 = [1, 2, '3']
```

compileToJS：

```javascript
var tuple1 = ['string', 1, true];
var tuple2;
tuple2 = [1, 2, '3'];
```

**`但是`**：

```typescript
let tuple3: [number, number, string]
tuple3[0] = 1;
tuple3[1] = 2;
tuple3[2] = '3';
```
这个是不行的。因为编译结果js执行 tuple3 声明的时候只是声明成 undefined。然后再进行 `tuple3[0] = 1` 会报错 `Uncaught TypeError: Cannot set property '0' of undefined` 

compileToJS：

```javascript
var tuple3;
tuple3[0] = 1;
tuple3[1] = 2;
tuple3[2] = '3';
```

## 枚举类型（enum）
enum 类型是对JavaScript标准数据类型的一个补充。有一种配置项的感觉。但实际上最终编译的结果就是个存储信息集合的object对象。

```typescript
enum Color { red, blue, green }
```

compileToJS：

```javascript
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
```

Color:
```javascript
var Color = {
    0: 'red',
    1: 'blue',
    2: 'green',
    'blue': 1,
    'green': 2,
    'red': 0
}
```
等于是声明了一个 Color 对象。在不设置默认值的情况下，会默认顺序添加 0,1,...,n。如果设置了默认值，默认值为number的情况下，会设置 obj[obj[key] = value] =  value,就会存在一对对称的key-value。如果设置默认值是非number，则只会设置 obj[key] = value;      
举个栗子：

```typescript
enum Color { red = "#fb0808", blue = 2, green = 3 }

let c1: Color = Color.red;
let c2: Color = Color.blue;
let c3: Color = Color.green;
console.log(c1, c2, c3)
```

compileToJS：

```javascript
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
```
Color：
```javascript
var Color = {
    2: "blue",
    3: "green",
    'blue': 2,
    'green': 3,
    'red': "#fb0808",
}
```

## 任意类型（any）
```typescript
const box = document.getElementById('box');
box.style.color = 'red';
```
比如在获取dom节点时，这里会有报错提示。这里可以使用 any
```typescript
const box: any = document.getElementById('box');
box.style.color = 'red';
```


## null 和 undefined
undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大


## void类型
void类型像是与any类型相反，它表示没有任何类型。 通常用来表明一个函数没有返回值。当一个函数没有返回值时，你通常会见到其返回值类型是 void
```typescript
function run():void{
    console.log('run')
}
run();
```

## never类型
never类型表示的是那些永不存在的值的类型。