<template><div><h1 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构"><span>对象解构</span></a></h1>
<h2 id="什么是解构" tabindex="-1"><a class="header-anchor" href="#什么是解构"><span>什么是解构</span></a></h2>
<p>使用ES6的一种语法规则，将一个对象或数组的某个属性提取到某个变量中
<strong>解构不会对被解构的目标造成任何影响</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kevin"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">"四川"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">"成都"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// let name, age, sex, address;</span></span>
<span class="line"><span class="token comment">// name = user.name;</span></span>
<span class="line"><span class="token comment">// age = user.age;</span></span>
<span class="line"><span class="token comment">// sex = user.sex;</span></span>
<span class="line"><span class="token comment">// address = user.address;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.let name, age, sex, address, abc;</span></span>
<span class="line"><span class="token comment">// 2.({ name, age, sex, address } = user);</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 先定义5个变量，然后从对象中读取同名属性，放到变量中 ---与1.2.步骤一样</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> address<span class="token punctuation">,</span> abc <span class="token operator">=</span> <span class="token number">123</span> <span class="token punctuation">}</span> <span class="token operator">=</span> user</span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> address<span class="token punctuation">,</span> abc<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在解构中使用默认值" tabindex="-1"><a class="header-anchor" href="#在解构中使用默认值"><span>在解构中使用默认值</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span>同名变量 <span class="token operator">=</span> 默认值<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> abc <span class="token operator">=</span> <span class="token number">123</span> <span class="token punctuation">}</span> <span class="token operator">=</span> user</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非同名属性解构" tabindex="-1"><a class="header-anchor" href="#非同名属性解构"><span>非同名属性解构</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span><span class="token literal-property property">属性名</span><span class="token operator">:</span>变量名<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kevin"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">"四川"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">"成都"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 先定义4个变量：name、age、gender、address</span></span>
<span class="line"><span class="token comment">// 再从对象user中读取同名属性赋值（其中gender读取的是sex属性）</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> gender <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">,</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> user</span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> address<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


