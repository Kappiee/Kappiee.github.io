<template>
    <div><h1 id="共享符号" tabindex="-1"><a class="header-anchor" href="#共享符号"><span>共享符号</span></a></h1>
        <p>根据某个符号名称（符号描述）能够得到<strong>同一个符号</strong></p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line">Symbol<span
            class="token punctuation">.</span><span class="token function">for</span><span
            class="token punctuation">(</span><span class="token string">"符号名/符号描述"</span><span
            class="token punctuation">)</span>  <span class="token comment">//获取共享符号</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
            </div>
        </div>
        <p>示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span
    class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span><span class="token operator">:</span> <span
    class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span><span
    class="token function">for</span><span class="token punctuation">(</span><span class="token string">"c"</span><span
    class="token punctuation">)</span><span class="token punctuation">]</span><span
    class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">[</span>Symbol<span
    class="token punctuation">.</span><span class="token function">for</span><span
    class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span><span
    class="token punctuation">]</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
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
            </div>
        </div>
        <p>模拟 Symbol.for 共享符号示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> SymbolFor <span
            class="token operator">=</span> <span class="token punctuation">(</span><span
            class="token punctuation">(</span><span class="token punctuation">)</span> <span
            class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> global <span class="token operator">=</span> <span
    class="token punctuation">{</span><span class="token punctuation">}</span><span
    class="token punctuation">;</span><span class="token comment">//用于记录有哪些共享符号</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span
    class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>global<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span
    class="token operator">!</span>global<span class="token punctuation">[</span>name<span
    class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            global<span class="token punctuation">[</span>name<span
    class="token punctuation">]</span> <span class="token operator">=</span> <span
    class="token function">Symbol</span><span class="token punctuation">(</span>name<span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>global<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> global<span
    class="token punctuation">[</span>name<span class="token punctuation">]</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> syb1 <span class="token operator">=</span> <span
    class="token function">SymbolFor</span><span class="token punctuation">(</span><span
    class="token string">"abc"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> syb2 <span class="token operator">=</span> <span
    class="token function">SymbolFor</span><span class="token punctuation">(</span><span
    class="token string">"abc"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>syb1 <span class="token operator">===</span> syb2<span
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
            </div>
        </div>
    </div>
</template>


