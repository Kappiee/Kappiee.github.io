<template>
    <div><h1 id="参数解构" tabindex="-1"><a class="header-anchor" href="#参数解构"><span>参数解构</span></a></h1>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token comment">// function print(user) {</span></span>
<span class="line"><span class="token comment">//     console.log(`姓名：${user.name}`)</span></span>
<span class="line"><span class="token comment">//     console.log(`年龄：${user.age}`)</span></span>
<span class="line"><span class="token comment">//     console.log(`性别：${user.sex}`)</span></span>
<span class="line"><span class="token comment">//     console.log(`身份：${user.address.province}`)</span></span>
<span class="line"><span class="token comment">//     console.log(`城市：${user.address.city}`)</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">print</span><span
    class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span
    class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span
    class="token punctuation">,</span> <span class="token literal-property property">address</span><span
    class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    province<span class="token punctuation">,</span></span>
<span class="line">    city</span>
<span class="line"><span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span
        class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">姓名：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">年龄：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">性别：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sex<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">身份：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>province<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">城市：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>city<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span
    class="token operator">:</span> <span class="token string">"kevin"</span><span
    class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span
    class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sex</span><span
    class="token operator">:</span> <span class="token string">"男"</span><span
    class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span
    class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">province</span><span
    class="token operator">:</span> <span class="token string">"四川"</span><span
    class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">city</span><span
    class="token operator">:</span> <span class="token string">"成都"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>user<span
    class="token punctuation">)</span></span>
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
            </div>
        </div>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token comment">// function ajax(options) {</span></span>
<span class="line"><span class="token comment">//     const defaultOptions = {</span></span>
<span class="line"><span class="token comment">//         method: "get",</span></span>
<span class="line"><span class="token comment">//         url: "/"</span></span>
<span class="line"><span class="token comment">//     }</span></span>
<span class="line"><span class="token comment">//     const opt = {</span></span>
<span class="line"><span class="token comment">//         ...defaultOptions,</span></span>
<span class="line"><span class="token comment">//         ...options</span></span>
<span class="line"><span class="token comment">//     }</span></span>
<span class="line"><span class="token comment">//     console.log(opt)</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ajax</span><span
    class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    method <span class="token operator">=</span> <span class="token string">"get"</span><span
    class="token punctuation">,</span></span>
<span class="line">    url <span class="token operator">=</span> <span class="token string">"/"</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token operator">=</span> <span
    class="token punctuation">{</span><span class="token punctuation">}</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">ajax</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span></span>
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
            </div>
        </div>
    </div>
</template>


