<template><div><h1 id="类型演算" tabindex="-1"><a class="header-anchor" href="#类型演算"><span>类型演算</span></a></h1>
<h2 id="三个关键字" tabindex="-1"><a class="header-anchor" href="#三个关键字"><span>三个关键字</span></a></h2>
<h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof"><span>typeof</span></a></h3>
<h4 id="用于类型约束时" tabindex="-1"><a class="header-anchor" href="#用于类型约束时"><span>用于类型约束时</span></a></h4>
<p>TS中的typeof,书写位置在类型约束的位置上
表示获取某个数据的类型</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">"13123"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 当不知道a的类型是什么时，使用typeof使b与a类型保持一致</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">b</span> <span class="token operator">:</span><span class="token keyword">typeof</span> a <span class="token operator">=</span> <span class="token string">"asd"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用于类时" tabindex="-1"><a class="header-anchor" href="#用于类时"><span>用于类时</span></a></h4>
<p>表示构造函数</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loginId</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token literal-property property">loginPwd</span><span class="token operator">:</span>string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 传入User类名 返回实体类</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cls</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> User</span><span class="token punctuation">)</span><span class="token operator">:</span>User<span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">cls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token function">createUser</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用typeof的方式</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cls</span><span class="token operator">:</span> <span class="token keyword">typeof</span> User</span><span class="token punctuation">)</span><span class="token operator">:</span>User<span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">cls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 另一个例子</span></span>
<span class="line"><span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> u2 <span class="token operator">=</span> u<span class="token comment">//u、u2为User类型</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> User <span class="token comment">// A 的类型为 typeof User</span></span>
<span class="line"><span class="token comment">// 此时u3也为User类型</span></span>
<span class="line"><span class="token keyword">const</span> u3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof"><span>keyof</span></a></h3>
<p>作用于类、接口、类型别名,用于获取其他类型中的所有成员名组成成员名，租成的联合类型</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loginId</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token literal-property property">loginPwd</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span>number</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">printUserProperty</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 正常</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">printUserProperty</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">"loginId"</span><span class="token operator">|</span><span class="token string">"loginPwd"</span><span class="token operator">|</span><span class="token string">"age"</span> <span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// keyof</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">printUserProperty</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> keyof User</span> <span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">u</span><span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loginId</span><span class="token operator">:</span><span class="token string">"001"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">loginPwd</span><span class="token operator">:</span><span class="token string">"13213123"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">132</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">printUserProperty</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in" tabindex="-1"><a class="header-anchor" href="#in"><span>in</span></a></h2>
<p>该关键字往往和keyof联用，限制某个索引类型的取值范围</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">loginId</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token literal-property property">loginPwd</span><span class="token operator">:</span>string</span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span>number</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 索引器</span></span>
<span class="line">type UserString <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>p<span class="token operator">:</span>string<span class="token punctuation">]</span><span class="token operator">:</span>string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">u</span><span class="token operator">:</span> UserString <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">u<span class="token punctuation">.</span>abc <span class="token operator">=</span> <span class="token string">"123"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 限制索引器</span></span>
<span class="line">type UserString <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>p <span class="token keyword">in</span> <span class="token string">"loginId"</span><span class="token operator">|</span><span class="token string">"loginPwd"</span><span class="token operator">|</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">:</span>string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 联合keyof</span></span>
<span class="line">type UserString <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>p <span class="token keyword">in</span> keyof User<span class="token punctuation">]</span><span class="token operator">:</span>string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 进阶</span></span>
<span class="line">type UserString <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>p <span class="token keyword">in</span> keyof User<span class="token punctuation">]</span><span class="token operator">:</span>User<span class="token punctuation">[</span>p<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">type UserReadonly <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   readonly <span class="token punctuation">[</span>p <span class="token keyword">in</span> keyof User<span class="token punctuation">]</span><span class="token operator">:</span>User<span class="token punctuation">[</span>p<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">type Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   readonly <span class="token punctuation">[</span>p <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span>p<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">type String<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token punctuation">[</span>p <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span>string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


