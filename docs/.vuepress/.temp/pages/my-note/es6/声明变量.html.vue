<template><div><h1 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量"><span>声明变量</span></a></h1>
<p><code v-pre>const</code> 在开发中，应该尽量使用const来声明变量
<code v-pre>let</code> 块级作用域：代码执行时遇到花括号，会创建一个块级作用域，花括号结束，销毁块级作用域</p>
<h2 id="声明var的问题" tabindex="-1"><a class="header-anchor" href="#声明var的问题"><span>声明var的问题</span></a></h2>
<p>使用var声明变量</p>
<ol>
<li>
<p>允许重复的变量声明：导致数据被覆盖</p>
</li>
<li>
<p>变量提升：怪异的数据访问、闭包问题</p>
</li>
<li>
<p>全局变量挂载到全局对象：全局对象成员污染问题</p>
</li>
</ol>
<p>示例</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line"> * 1. 变量提升 使用let</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//底层实现上，let声明的变量实际上也会有提升，但是，提升后会将其放入到“暂时性死区”，如果访问的变量位于暂时性死区，则会报错：“Cannot access 'a' before initialization”。当代码运行到该变量的声明语句时，会将其从暂时性死区中移除。</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//Cannot access 'b' before initialization</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line"> * 1. 允许重复的变量声明：导致数据被覆盖</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//假设这里有一千行代码</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// eslint-disable-next-line no-redeclare</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line"> * 2. 变量提升：怪异的数据访问</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// eslint-disable-next-line no-redeclare</span></span>
<span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//abc/abc  //undefined/undefined</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line"> * 2. 变量提升：闭包问题</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//在循环中，用let声明的循环变量，会特殊处理，每次进入循环体，都会开启一个新的作用域，并且将循环变量绑定到该作用域（每次循环，使用的是一个全新的循环变量）</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"divButtons"</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    btn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"按钮"</span> <span class="token operator">+</span> i<span class="token punctuation">;</span></span>
<span class="line">    div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出11(无论哪个按钮)  使用let i = 1 可解决</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 循环结束后，i：11</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line"> * 3. 全局变量挂载到全局对象：全局对象成员污染问题</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> abc <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>abc<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//123</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> console <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">)</span> <span class="token comment">//console 被污染 报错:无console方法</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


