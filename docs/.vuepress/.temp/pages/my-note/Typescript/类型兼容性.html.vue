<template><div><h1 id="类型兼容性" tabindex="-1"><a class="header-anchor" href="#类型兼容性"><span>类型兼容性</span></a></h1>
<p>B-&gt;A 如果能完成赋值，则B和A类型兼容</p>
<p>鸭子辨型法（子结构辩型法）: 目标类型需要某一些特征，赋值的类型只要能满足改特征即可</p>
<ul>
<li>
<p>基本类型: 完全匹配</p>
</li>
<li>
<p>对象类型: 鸭子辩型法</p>
</li>
<li>
<p>函数类型:</p>
<ul>
<li><strong>参数</strong> 传递给目标函数的参数可以少，但不可以多</li>
<li><strong>返回值</strong> 检查严格</li>
</ul>
</li>
</ul>
<h2 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型"><span>对象类型</span></a></h2>
<h3 id="鸭子辩型法" tabindex="-1"><a class="header-anchor" href="#鸭子辩型法"><span>鸭子辩型法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Duck</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sound</span><span class="token operator">:</span><span class="token string">"嘎嘎嘎"</span></span>
<span class="line">    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"伪装成鸭子的人"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sound</span><span class="token operator">:</span><span class="token string">"嘎嘎嘎"</span> <span class="token keyword">as</span> <span class="token string">"嘎嘎嘎"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">duck</span><span class="token operator">:</span>Duck <span class="token operator">=</span> person <span class="token comment">// 无问题 常用在获取接口数据时，只赋值想要的数据进行处理</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型-当使用字面类型赋值时会进行更加严格的判定" tabindex="-1"><a class="header-anchor" href="#对象类型-当使用字面类型赋值时会进行更加严格的判定"><span>对象类型:当使用字面类型赋值时会进行更加严格的判定</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Duck</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"伪装成鸭子的人"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sound</span><span class="token operator">:</span><span class="token string">"嘎嘎嘎"</span> <span class="token keyword">as</span> <span class="token string">"嘎嘎嘎"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 报错  当使用字面类型赋值时会进行更加严格的判定</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">duck</span><span class="token operator">:</span>Duck <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"伪装成鸭子的人"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sound</span><span class="token operator">:</span><span class="token string">"嘎嘎嘎"</span> <span class="token keyword">as</span> <span class="token string">"嘎嘎嘎"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


