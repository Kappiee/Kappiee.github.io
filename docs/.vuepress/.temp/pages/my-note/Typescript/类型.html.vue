<template><div><h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h1>
<h2 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型"><span>基本类型</span></a></h2>
<ul>
<li>number</li>
<li>string</li>
<li>boolean</li>
<li>数组</li>
<li>object</li>
<li>null undefined</li>
</ul>
<p>null 与 undefined 是其他类型的子类型，它们可以赋值给其他类型</p>
<p>通过添加 <code v-pre>strictNullChecks:true</code>, 可以更严格的空类型检查，null和undefined只能赋予自身</p>
<h2 id="其他常用类型" tabindex="-1"><a class="header-anchor" href="#其他常用类型"><span>其他常用类型</span></a></h2>
<ul>
<li>联合类型: <code v-pre>string | undefined</code>，需要判断类型 <code v-pre>typeof name === &quot;string&quot;</code></li>
<li>void类型: 约束函数返回值</li>
<li>never类型: 约束函数返回值， 表示函数永远不会结束 <code v-pre>function throwError(msg: string): never{throw new Error(msg);}</code>
或 <code v-pre>function alwaysDoSomething(): never {while(true){}}</code></li>
<li>字面类型: <code v-pre>let a:&quot;A&quot;|&quot;B&quot;</code></li>
<li>元组类型(Tuple): 一个固定长度的数组，并且数组中每一项的类型确定 <code v-pre>let u = [string,number];</code></li>
<li>any类型: any类型可以绕过类型检查，因此any类型可以赋值给任意类型</li>
</ul>
</div></template>


