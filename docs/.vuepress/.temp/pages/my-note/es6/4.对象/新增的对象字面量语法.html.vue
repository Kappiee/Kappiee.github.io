<template><div><h1 id="新增的对象字面量语法" tabindex="-1"><a class="header-anchor" href="#新增的对象字面量语法"><span>新增的对象字面量语法</span></a></h1>
<h2 id="成员速写" tabindex="-1"><a class="header-anchor" href="#成员速写"><span>成员速写</span></a></h2>
<p>如果对象字面量初始化时，成员的名称来自于一个变量，并且和变量的名称相同，则可以进行简写</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token parameter">loginId<span class="token punctuation">,</span> loginPwd<span class="token punctuation">,</span> nickName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"loginId"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loginId<span class="token punctuation">,</span> <span class="token string">"nickname"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nickName<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// return {</span></span>
<span class="line">    <span class="token comment">//     loginId:loginId,</span></span>
<span class="line">    <span class="token comment">//     loginPwd:loginPwd,</span></span>
<span class="line">    <span class="token comment">//     nickName:nickName,</span></span>
<span class="line">    <span class="token comment">//     sayHello:sayHello,</span></span>
<span class="line">    <span class="token comment">//     id: Math.random()</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        loginId<span class="token punctuation">,</span></span>
<span class="line">        loginPwd<span class="token punctuation">,</span></span>
<span class="line">        nickName<span class="token punctuation">,</span></span>
<span class="line">        sayHello<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">,</span> <span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">u<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法速写" tabindex="-1"><a class="header-anchor" href="#方法速写"><span>方法速写</span></a></h2>
<p>对象字面初始化时，方法可以省略冒号和function关键字</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"姬成"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// sayHello: function(){</span></span>
<span class="line">    <span class="token comment">//     console.log(this.name, this.age)</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">user<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性名" tabindex="-1"><a class="header-anchor" href="#计算属性名"><span>计算属性名</span></a></h2>
<p>有的时候，初始化对象时，某些属性名可能来自于某个表达式的值，在ES6，可以使用中括号来表示该属性名是通过计算得到的。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> prop1 <span class="token operator">=</span> <span class="token string">"name2"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> prop2 <span class="token operator">=</span> <span class="token string">"age2"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> prop3 <span class="token operator">=</span> <span class="token string">"sayHello2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span> prop1 <span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"姬成"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span> prop2 <span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span> prop3 <span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span> prop1 <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span> prop2 <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// user[prop1] = "姬成"</span></span>
<span class="line"></span>
<span class="line">user<span class="token punctuation">[</span> prop3 <span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


