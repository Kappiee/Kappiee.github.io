<template>
    <div><h1 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串"><span>模板字符串</span></a></h1>
        <p>ES6之前处理字符串繁琐的两个方面：</p>
        <ol>
            <li>多行字符串</li>
            <li>字符串拼接</li>
        </ol>
        <p>如果要在字符串中拼接js表达式，只需要在模板字符串中使用<code v-pre>${JS表达式}</code></p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">var</span> love1 <span class="token operator">=</span> <span
            class="token string">"秋葵"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> love2 <span class="token operator">=</span> <span
    class="token string">"香菜"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> text <span class="token operator">=</span> <span
    class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">邓哥喜欢</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>love1<span
    class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">邓哥也喜欢</span><span class="token interpolation"><span
        class="token interpolation-punctuation punctuation">${</span>love2<span
        class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">表达式可以是任何有意义的数据</span><span class="token interpolation"><span
        class="token interpolation-punctuation punctuation">${</span><span class="token number">1</span> <span
        class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span
        class="token number">2</span> <span class="token operator">/</span> <span class="token number">0.5</span><span
        class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">表达式是可以嵌套的：</span><span class="token interpolation"><span
        class="token interpolation-punctuation punctuation">${</span><span class="token template-string"><span
        class="token template-punctuation string">`</span><span class="token string">表达式中的模板字符串</span><span
        class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>love1 <span
        class="token operator">+</span> love2<span
        class="token interpolation-punctuation punctuation">}</span></span><span
        class="token template-punctuation string">`</span></span><span
        class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">\n\n</span>
<span class="line">奥布瓦的发顺丰</span>
<span class="line">在模板字符串中使用\${JS表达式}可以进行插值</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>text<span class="token punctuation">)</span><span
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
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
    </div>
</template>


