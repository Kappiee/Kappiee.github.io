<template>
    <div><h1 id="async-和-await" tabindex="-1"><a class="header-anchor"
                                                  href="#async-和-await"><span>async 和 await</span></a></h1>
        <p>ES7推出了两个关键字<code v-pre>async</code>和<code v-pre>await</code>，用于更加优雅的表达Promise</p>
        <h2 id="async" tabindex="-1"><a class="header-anchor" href="#async"><span>async</span></a></h2>
        <p>async关键字用于修饰函数，被它修饰的函数，一定返回Promise</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span
            class="token keyword">function</span> <span class="token function">method1</span><span
            class="token punctuation">(</span><span class="token punctuation">)</span><span
            class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">1</span><span
    class="token punctuation">;</span> <span class="token comment">// 该函数的返回值是Promise完成后的数据</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">method1</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span
    class="token function">method2</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span
    class="token function">resolve</span><span class="token punctuation">(</span><span
    class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span
    class="token comment">// 若返回的是Promise，则method得到的Promise状态和其一致</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">method2</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span
    class="token function">method3</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span
    class="token class-name">Error</span><span class="token punctuation">(</span><span
    class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span
    class="token comment">// 若执行过程报错，则任务是rejected</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">method3</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { &lt;rejected> Error(1) }</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <h2 id="await" tabindex="-1"><a class="header-anchor" href="#await"><span>await</span></a></h2>
        <p><code v-pre>await</code>关键字表示等待某个Promise完成，<strong>它必须用于<code
            v-pre>async</code>函数中</strong></p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span
            class="token keyword">function</span> <span class="token function">method</span><span
            class="token punctuation">(</span><span class="token punctuation">)</span><span
            class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> n <span class="token operator">=</span> <span
    class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span
    class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span
    class="token comment">// 1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 上面的函数等同于</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">method</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span
    class="token class-name">Promise</span><span class="token punctuation">(</span><span
    class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span
    class="token punctuation">)</span><span class="token operator">=></span><span
    class="token punctuation">{</span></span>
<span class="line">    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span
    class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span
    class="token punctuation">.</span><span class="token function">then</span><span
    class="token punctuation">(</span><span class="token parameter">n</span><span class="token operator">=></span><span
    class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span><span
    class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <p><code v-pre>await</code>也可以等待其他数据</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span
            class="token keyword">function</span> <span class="token function">method</span><span
            class="token punctuation">(</span><span class="token punctuation">)</span><span
            class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> n <span class="token operator">=</span> <span
    class="token keyword">await</span> <span class="token number">1</span><span class="token punctuation">;</span> <span
    class="token comment">// 等同于 await Promise.resolve(1)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <p>如果需要针对失败的任务进行处理，可以使用<code v-pre>try-catch</code>语法</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">async</span> <span
            class="token keyword">function</span> <span class="token function">method</span><span
            class="token punctuation">(</span><span class="token punctuation">)</span><span
            class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> n <span class="token operator">=</span> <span
    class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span
    class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">// 这句代码将抛出异常</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">'成功'</span><span class="token punctuation">,</span> n<span
    class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">'失败'</span><span class="token punctuation">,</span> err<span
    class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">method</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出： 失败 123</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <p>示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token comment">// 女神的名字数组</span></span>
<span class="line"><span class="token keyword">const</span> beautyGirls <span class="token operator">=</span> <span
    class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'梁平'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'邱杰'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'王超'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'冯秀兰'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'赖军'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'顾强'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'戴敏'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'吕涛'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'冯静'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'蔡明'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'廖磊'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'冯洋'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'韩杰'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'江涛'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'文艳'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'杜秀英'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'丁艳'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'邓静'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'江刚'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'乔刚'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'史平'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'康娜'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'袁磊'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'龙秀英'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'姚静'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'潘娜'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'萧磊'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'邵勇'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'李芳'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'谭芳'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'夏秀英'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'程娜'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'武杰'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'崔军'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'廖勇'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'崔强'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'康秀英'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'余磊'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'邵勇'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'贺涛'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 向某位女生发送一则表白短信</span></span>
<span class="line"><span class="token comment">// name: 女神的姓名</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sendMessage</span><span
    class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span
    class="token class-name">Promise</span><span class="token punctuation">(</span><span
    class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span
    class="token punctuation">)</span> <span class="token operator">=></span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 模拟 发送表白短信</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span></span>
<span class="line">      <span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">邓哥 -> </span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span class="token string">：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘</span><span
    class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">等待</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span class="token string">回复......</span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 模拟 女神回复需要一段时间</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span> <span
    class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 模拟 有10%的几率成功</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span
    class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span
    class="token number">0.1</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 成功，调用 onFulFiled，并传递女神的回复</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span><span
    class="token template-string"><span class="token template-punctuation string">`</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -> 邓哥：我是九，你是三，除了你还是你😘</span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span
    class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 失败，调用 onRejected，并传递女神的回复</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span><span
    class="token template-string"><span class="token template-punctuation string">`</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token string"> -> 邓哥：你是个好人😜</span><span class="token template-punctuation string">`</span></span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span
    class="token number">1000</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 批量表白的程序</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span
    class="token function">proposal</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> isSuccess <span class="token operator">=</span> <span
    class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span
    class="token keyword">const</span> girl <span class="token keyword">of</span> beautyGirls<span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> reply <span class="token operator">=</span> <span
    class="token keyword">await</span> <span class="token function">sendMessage</span><span
    class="token punctuation">(</span>girl<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>reply<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">'表白成功!'</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      isSuccess <span class="token operator">=</span> <span class="token boolean">true</span><span
    class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span
    class="token punctuation">(</span>reply<span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>reply<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">'表白失败'</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span
    class="token operator">!</span>isSuccess<span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">'邓哥注定孤独一生'</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">proposal</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
    </div>
</template>


