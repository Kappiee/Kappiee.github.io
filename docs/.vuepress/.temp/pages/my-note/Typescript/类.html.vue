<template><div><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h1>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span></span>
<span class="line">    readonly id <span class="token operator">:</span> number</span>
<span class="line">    <span class="token literal-property property">age</span> <span class="token operator">:</span> number</span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">"男"</span><span class="token operator">|</span><span class="token string">"女"</span> <span class="token operator">=</span> <span class="token string">"男"</span></span>
<span class="line">    pid<span class="token operator">?</span><span class="token operator">:</span>string</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token literal-property property">publishNumber</span> <span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token literal-property property">curNumber</span> <span class="token operator">:</span>number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//name 语法糖 构造函数赋值未作任何事情时，可以使用这种方式</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">title</span> <span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>curNumber <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>publishNumber<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发布文章"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>curNumber<span class="token operator">++</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"今日发布额度已用完"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>public : 公共的，默认访问修饰符，类外可以访问</li>
<li>private : 私有的，类内可以访问</li>
<li>protected: 1</li>
</ul>
</div></template>


