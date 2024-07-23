---
title: readonly修饰符
author: Kapppiee
createTime: 2024/07/16 21:30:35
permalink: /insight/typescript/readonly/
---

## readonly修饰后只能在初始化赋值

```js ts
interface User{
    readonly id: string
    name: string
    age: number
    readonly arr: readonly string[] //第一个readonly相当于使用const
}

let u: User = {
    id:"123",
    name:"Aasd",
    age: 33,
    arr:["123","asd"]
}

u.id = "245" //报错，
arr = [5,6,7,8] //报错，与下文修饰数组相反
arr.push()//报错


```

## readonly修饰数组

```js ts
let arr: readonly number[] = [3,4,5];
arr = [5,6,7,8] //不报错

const arr: readonly number[] = [3,4,5];
arr = [5,6,7,8] //报错

arr.push() //报错 修改相关数组改变的函数都将报错
arr.splice() //报错

```
