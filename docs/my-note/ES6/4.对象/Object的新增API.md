# Object的新增API

## Object.is

用于判断两个数据是否相等，基本上跟严格相等（===）是一致的，除了以下两点：

1) NaN和NaN相等
2) +0和-0不相等

```js
console.log(NaN === NaN); // false
console.log(+0 === -0);  // true

console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
```

## Object.assign

用于混合对象，通常使用**展开运算符**来解决混合对象问题，与展开运算符一致都是**浅拷贝**
> 深拷贝使用可以使用parse() 和 stringify() 方法，但是这种方法对象不能包括函数

```js
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
```

> 或使用如 lodash 的 _.cloneDeep()

```js
let _ = require('lodash');
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = _.cloneDeep(obj1);
```

Object.assign 示例

```js
const obj1 = {
    a: 123,
    b: 456,
    c: "abc"
}

const obj2 = {
    a: 789,
    d: "kkk"
}

/*
{
    a: 789,
    b: 456,
    c: "abc",
    d: "kkk"
}
*/

//将obj2的数据，覆盖到obj1，并且会对obj1产生改动，然后返回obj1
const obj = Object.assign(obj1, obj2);

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj)

console.log(obj===obj1)

console.log(obj1)

console.log(obj2)
```

## Object.getOwnPropertyNames 的枚举顺序

Object.getOwnPropertyNames方法**之前就存在**，只不过，官方没有明确要求，对属性的顺序如何排序，如何排序，完全由浏览器厂商决定。

**ES6规定了该方法返回的数组的排序方式**如下：

- 先排数字，并按照升序排序
- 再排其他，按照书写顺序排序

```js
const obj = {
    d: 1,
    b: 2,
    a: 3,
    0: 6,
    5: 2,
    4: 1
}
const props = Object.getOwnPropertyNames(obj)
console.log(props)//["0","4","5","d","b","a"]
```

## Object.setPrototypeOf

该函数用于设置某个对象的**隐式原型**

比如： Object.setPrototypeOf(obj1, obj2)，
相当于：  ` obj1.__proto__ = obj2 `
