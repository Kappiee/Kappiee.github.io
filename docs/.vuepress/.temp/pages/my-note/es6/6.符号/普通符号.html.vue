<template><div><h1 id="普通符号" tabindex="-1"><a class="header-anchor" href="#普通符号"><span>普通符号</span></a></h1>
<p>符号是ES6新增的一个数据类型，它通过使用函数 <code v-pre>Symbol(符号描述)</code> 来创建</p>
<p>符号设计的初衷，是为了给对象设置私有属性</p>
<p>私有属性：只能在对象内部使用，外面无法使用</p>
<p>符号具有以下特点：</p>
<ul>
<li>没有字面量</li>
<li>使用 typeof 得到的类型是 symbol</li>
<li><strong>每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同</strong></li>
<li>符号可以作为对象的属性名存在，这种属性称之为符号属性
<ul>
<li>开发者可以通过精心的设计，让这些属性<strong>无法通过常规方式被外界访问</strong></li>
<li><strong>符号属性是不能枚举</strong>的，因此在 for-in 循环中无法读取到符号属性，Object.keys 方法也<strong>无法读取到符号属性</strong></li>
<li><strong>Object.getOwnPropertyNames</strong> 尽管可以得到所有无法枚举的属性，但是仍然<strong>无法读取到符号属性</strong></li>
<li>ES6 新增 <strong>Object.getOwnPropertySymbols</strong> 方法，<strong>可以读取符号</strong></li>
</ul>
</li>
<li>符号 <strong>无法被隐式转换（无法使用（int）Symbol() 即 无法2*Symbol() 进行运算）</strong>，因此不能被用于数学运算、字符串拼接或其他隐式转换的场景，但符号
<strong>可以显式的转换为字符串</strong>，通过 String 构造函数进行转换即可，console.log 之所以可以输出符号，是它在内部进行了显式转换</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="创建一个符号" tabindex="-1"><a class="header-anchor" href="#创建一个符号"><span>创建一个符号</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//创建一个符号</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> syb1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> syb2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>syb1<span class="token punctuation">,</span> syb2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Symbol() Symbol(abc)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> syb1 <span class="token operator">===</span> <span class="token string">"symbol"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> syb2 <span class="token operator">===</span> <span class="token string">"symbol"</span><span class="token punctuation">)</span> <span class="token comment">//true true </span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-函数得到的符号永远不相等" tabindex="-1"><a class="header-anchor" href="#symbol-函数得到的符号永远不相等"><span>Symbol 函数得到的符号永远不相等</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> syb1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"这是随便写的一个符号"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> syb2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"这是随便写的一个符号"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>syb1<span class="token punctuation">,</span> syb2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>syb1 <span class="token operator">===</span> syb2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="符号属性" tabindex="-1"><a class="header-anchor" href="#符号属性"><span>符号属性</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//符号可以作为对象的属性名存在，这种属性称之为符号属性</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> syb1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"这是用于对象的一个属性"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>syb1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">3</span>  <span class="token comment">//符号属性</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-getownpropertynames" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames"><span>Object.getOwnPropertyNames</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> syb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>syb<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span> <span class="token comment">//a b 符号属性是不能枚举的</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[ 'a', 'b' ]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[ 'a', 'b' ] //getOwnPropertyNames可以获得无法枚举的属性 但是也获取不到符号属性</span></span>
<span class="line"><span class="token comment">//得到的是一个符号属性的数组</span></span>
<span class="line"><span class="token keyword">const</span> sybs <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sybs<span class="token punctuation">,</span> sybs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> syb<span class="token punctuation">)</span> <span class="token comment">//[ Symbol() ] true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可以通过符号实现私有属性" tabindex="-1"><a class="header-anchor" href="#可以通过符号实现私有属性"><span>可以通过符号实现私有属性</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token comment">//// 类实例</span></span>
<span class="line"><span class="token comment">// const hero = (function () {</span></span>
<span class="line"><span class="token comment">//     const getRandom = Symbol();</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//     return {</span></span>
<span class="line"><span class="token comment">//         attack: 30,</span></span>
<span class="line"><span class="token comment">//         hp: 300,</span></span>
<span class="line"><span class="token comment">//         defence: 10,</span></span>
<span class="line"><span class="token comment">//         gongji() { //攻击</span></span>
<span class="line"><span class="token comment">//             //伤害：攻击力*随机数（0.8~1.1)</span></span>
<span class="line"><span class="token comment">//             const dmg = this.attack * this[getRandom](0.8, 1.1);</span></span>
<span class="line"><span class="token comment">//             console.log(dmg);</span></span>
<span class="line"><span class="token comment">//         },</span></span>
<span class="line"><span class="token comment">//         [getRandom](min, max) { //根据最小值和最大值产生一个随机数</span></span>
<span class="line"><span class="token comment">//             return Math.random() * (max - min) + min;</span></span>
<span class="line"><span class="token comment">//         }</span></span>
<span class="line"><span class="token comment">//     }</span></span>
<span class="line"><span class="token comment">// })()</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// console.log(hero);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 类</span></span>
<span class="line"><span class="token keyword">const</span> Hero <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> getRandom <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">attack<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> defence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>attack <span class="token operator">=</span> attack<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">=</span> hp<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>defence <span class="token operator">=</span> defence<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">gongJi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//伤害：攻击力*随机数（0.8~1.1)</span></span>
<span class="line">            <span class="token keyword">const</span> dmg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>attack <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">[</span>getRandom<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dmg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">[</span>getRandom<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//根据最小值和最大值产生一个随机数</span></span>
<span class="line">            <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// hero[getRandom](3,5) //报错无法使用，可以通过符号实现私有属性</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//以下方法可以强行使用私有属性</span></span>
<span class="line"><span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sybs <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span><span class="token class-name">Hero</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> prop <span class="token operator">=</span> sybs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


