# Unicode支持

`码元（Code Unit）` Unicode使用16位二进制来存储文字。我们将一个**16位的二进制编码**叫做一个码元（Code Unit）

`码点（Code Point）` 某些文字扩展到了32位（占用两个码元）,将**某个文字对应的二进制数字**叫做码点（Code Point）

ES6为了解决这个困扰，为字符串提供了方法：`codePointAt`，根据字符串码元的位置得到其码点。

同时，**ES6为正则表达式添加了一个flag: u**，如果添加了该配置，则匹配时，使用**码点匹配**

示例

```js
const text = "𠮷"; //占用了两个码元（32位）

console.log("字符串长度：", text.length); //2
console.log("使用正则测试：", /^.$/u.test(text)); //true
console.log("得到第一个码元：", text.charCodeAt(0)); //55362
console.log("得到第二个码元：", text.charCodeAt(1)); //57271

//𠮷：\ud842\udfb7
console.log("得到第一个码点：", text.codePointAt(0)); //134071
console.log("得到第二个码点：", text.codePointAt(1)); //57271 扫描\udfb7,后没有第二个码元。返回码元的值

/**
 * 判断字符串char，是32位，还是16位
 * @param {*} char
 */
function is32bit(char, i) {
    //如果码点大于了16位二进制的最大值，则其是32位的
    return char.codePointAt(i) > 0xffff;
}

/**
 * 得到一个字符串码点的真实长度
 * @param {*} str
 */
function getLengthOfCodePoint(str) {
    var len = 0;
    for (let i = 0; i < str.length; i++) {
        //i在索引码元
        if (is32bit(str, i)) {
            //当前字符串，在i这个位置，占用了两个码元
            i++;
        }
        len++;
    }
    return len;
}

console.log("𠮷是否是32位的：", is32bit("𠮷", 0)) //true
console.log("ab𠮷ab的码点长度：", getLengthOfCodePoint("ab𠮷ab")) //5
```
