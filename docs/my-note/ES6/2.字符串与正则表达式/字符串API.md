# 更多的字符串API

以下均为字符串的实例（原型）方法

- includes

判断字符串中是否包含指定的子字符串

- startsWith

判断字符串中是否以指定的字符串开始

- endsWith

判断字符串中是否以指定的字符串结尾

- repeat

将字符串重复指定的次数，然后返回一个新字符串。

```js
const text = "成哥是狠人";


console.log("是否包含“狠”：", text.includes("狠"));
console.log("是否以“成哥”开头：", text.startsWith("成哥"),3);//下标为3的位置开始找
console.log("是否以“狠人”结尾：", text.endsWith("狠人"));
console.log("重复4次：", text.repeat(4));
```
