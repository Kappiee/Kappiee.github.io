import{_ as n,c as s,o as a,b as p}from"./app-BFW4Kyoc.js";const t={},e=p(`<h1 id="函数作为构造函数" tabindex="-1"><a class="header-anchor" href="#函数作为构造函数"><span>函数作为构造函数</span></a></h1><p>ES6提供了一个特殊的API，可以使用该API在函数内部，判断该函数是否使用了new来调用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;该函数没有使用new来调用&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//该表达式，得到的是：如果没有使用new来调用函数，则返回undefined</span></span>
<span class="line"><span class="token comment">//如果使用new调用函数，则得到的是new关键字后面的函数本身</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span> lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//判断是否是使用new的方式来调用的函数</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// //过去的判断方式  //不完美 下列第三种p3方式可以绕开</span></span>
<span class="line">    <span class="token comment">// if (!(this instanceof Person)) {</span></span>
<span class="line">    <span class="token comment">//     throw new Error(&quot;该函数没有使用new来调用&quot;)</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;该函数没有使用new来调用&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;袁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;进&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&quot;袁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;进&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token string">&quot;袁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;进&quot;</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","函数作为构造函数.html.vue"]]),k=JSON.parse('{"path":"/my-note/es6/3.%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.html","title":"函数作为构造函数","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1721203532000,"contributors":[{"name":"kappie","email":"1780409106@qq.com","commits":2}]},"filePathRelative":"my-note/es6/3.函数/函数作为构造函数.md"}');export{r as comp,k as data};
